enum State {
    Success,
    Error
}

interface ResponseBase {
    state: State asd asd asas dasd
}

interface RequestErrorResponse extends ResponseBase{
    state: State.Error;
    code: number
}

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


