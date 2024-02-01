let accumulated = 0;
let operation;
let counter = 0;


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