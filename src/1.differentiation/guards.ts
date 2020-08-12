enum ValueEnum {
    SomeComplexNumberEnumValue,
    SomeComplexStringEnumValue,
}

interface ValueClass {
    enumType: ValueEnum;
    foo: string | number;
}

class StringClass implements ValueClass {
    readonly enumType = ValueEnum.SomeComplexStringEnumValue;

    constructor(public foo: string) {
    }
}

class NumberClass implements ValueClass {
    readonly enumType = ValueEnum.SomeComplexNumberEnumValue;

    constructor(public foo: number) {
    }

    someNumberFunction() {
        return 333;
    }
}

/**
 * Type Guard
 * @param instance
 */
function isNumberClass(instance: ValueClass): instance is NumberClass {
    return instance.enumType === ValueEnum.SomeComplexStringEnumValue
        && (instance as NumberClass).someNumberFunction === undefined
}

// Let's check how it works

const stringClass = new StringClass("some string");
const numberClass = new NumberClass(50);

const valueClasses: Array<ValueClass> = [numberClass, stringClass];

valueClasses.forEach((valueClass) => {
    if (isNumberClass(valueClass)) {
        let someNumber: number = valueClass.foo;
        console.log(`-> Everything is ok. Value is ${someNumber + 50}`)
    } else {
        console.log(`-> Something is wrong. Class: ${JSON.stringify(valueClass)}`);
    }
})


