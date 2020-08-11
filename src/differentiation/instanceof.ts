class StringClass {
    private foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }
}

class NumberClass {
    private foo: number;

    constructor(foo: number) {
        this.foo = foo;
    }
}

function checkInstance(instance: NumberClass | StringClass){
    if(instance instanceof NumberClass){
        return "You created an instance of NumberClass"
    }

    if(instance instanceof StringClass){
        return "You created an instance of StringClass"
    }
}

const start = checkInstance(new StringClass('something'))
console.log(start);
