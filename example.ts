interface Some {
    some: string;
}

class SomeImp implements Some {
    constructor(public some: string) {
    }

    doSomething(){
        console.log(this.some)
    }


    doSome() {
        console.log('text');
    }
}
