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

function createNewClass(value: string|number){
    if(typeof value === 'string'){
        return new StringClass(value)
    }

    if(typeof value === 'number'){
        return new NumberClass(value)
    }
}

const start = createNewClass('hello')
console.log(start);
