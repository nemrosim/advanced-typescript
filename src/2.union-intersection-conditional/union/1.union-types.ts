"use strict";

interface TextObjectProp {
    size: string;
}

interface NumberObjectProps {
    size: number,
}

const TextObject: TextObjectProp = {
    size: '120px',
}

const NumberObject: NumberObjectProps = {
    size: 120,
}

function setNewSize(obj: TextObjectProp | NumberObjectProps, obj2: TextObjectProp | NumberObjectProps) {
    // @ts-ignore
    let result = obj.size - obj2.size;
    // console.log(result)
}


// === variant 1 ===
function doSomething(value: string | number | boolean | undefined | null) {
    console.log(`Do something. Value is: ${value}`)
}

doSomething(undefined);
doSomething(null);

// === variant 2 ===

type DoSomethingElseProps = string | number | boolean | null

function doSomethingElse(value?: DoSomethingElseProps) {
    console.log(`Do something else. Value is: ${value}`)
}

doSomethingElse(undefined);
doSomethingElse(null);

// === variant 3 ===

type DoSomeProps = {
    value?: string | number | boolean | null;
}

function doSome({value}: DoSomeProps) {
    console.log(`Do some. Value is: ${value}`)
}

doSome({value: undefined});
doSome({value: null});













