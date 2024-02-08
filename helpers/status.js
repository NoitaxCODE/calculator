let accumulated = 0;
let operation;
let counter = 0;
let operationStatus = false;


export const setCounter = (value = counter)=> {
    counter = value
    return counter
}

export const setAccumulated = (value = accumulated)=> {
    accumulated = value
    return accumulated
}

export const setOperation = (value = operation)=> {
    operation = value
    return operation
}

export const setOperationStatus = (value = operationStatus)=> {
    operationStatus = value
    return operationStatus
}

