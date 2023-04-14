import { MUL, ADD, DIV, SUB, SQRT, toNumber } from "@api"

export const _defaultOperations = [
    [MUL, (first, second) => first * second],
    [DIV, (first, second) => first / second],
    [ADD, (first, second) => first + second],
    [SUB, (first, second) => first - second],
    [SQRT, (first, second) => Math.sqrt(first)],
]

export const operations = function (defaultOperations = _defaultOperations) {

    const operations = Array.from(defaultOperations);

    return {
        getAll: () => operations,
        applyOperation: (op) => operations.push(op),

        
        calculate: (operation, [first, second = 0]) => {
            const _operation = operations.find(op => op.at(0) === operation)?.at(1)
            return _operation ? _operation(toNumber(second), toNumber(first)) : second
        }
    }
}

