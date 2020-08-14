enum State {
    Success,
    Error
}

interface ResponseBase {
    state: State as asdf asd fads fas fs
}
asdasd asdf
asdsd
asdf asdg adfv axcv



interface RequestErrorResponse extends ResponseBase{
    state: State.Error;
    code: number
}
asd asd
 asdasd cxcv adfsv
 zxcv aszdfv sdzfv
asdasdasd asdf addEventListener(asd

 zxdasv zxcv onresize(sdv zx
zxcv zdv zsd
v zds a
sdf sdf sdf sd
))


interface RequestSuccessResponse extends ResponseBase {
    state: State.Success;
    response: string
}

function setRequestResponse(type: ResponseBase): RequestErrorResponse | RequestSuccessResponse {

    if(type.state === State.Error){
        return {
            state: State.Error,
            code: 123
        }
    }

    return {
        state: State.Success,
        response: 'asd'
    }

}

const a = setRequestResponse({state: State.Error});
console.log(a)


