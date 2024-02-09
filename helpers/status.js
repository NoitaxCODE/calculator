let accumulated = 0;
let operation;
let counter = 0;
let operationStatus = 0;


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
    console.log(value)
    if ( value === true ){ operationStatus += 1 }else if( value=== false ) { operationStatus = 0 };
    console.log(operationStatus)
    if ( operationStatus === 2 ) return true
}

