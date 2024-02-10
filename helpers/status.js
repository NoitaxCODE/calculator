let accumulated = 0;
let operation;
let counter = 0;
let operationStatus = 0;
let previusValue


export const setCounter = (value = counter) => {
    counter = value
    return counter
}

export const setAccumulated = (value = accumulated) => {
    accumulated = value
    return accumulated
}

export const setOperation = (value = operation) => {
    operation = value
    return operation
}

export const setOperationStatus = (value) => {
    // if (value) operationStatus += 1;
    // if (!value) operationStatus = 0;
    // console.log(operationStatus)
    // if (operationStatus === 2) return true;
}

export const setPreviusValue = ({ target }) => {

    const { id } = target
    if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') previusValue = id;
    if (target.matches('.number')) previusValue = '';
    return previusValue
}

export const resetPreviusValue = () => {
    previusValue = ''
}

