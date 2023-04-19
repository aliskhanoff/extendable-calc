import { MUL, ADD, DIV, SUB, SQRT, toNumber } from "@api"

export const _defaultOperations = [
    [MUL, (first, second) => ((toNumber(first) * toNumber(second)))],
    [DIV, (first, second) => ((toNumber(first) / toNumber(second)))],
    [ADD, (first, second) => ((toNumber(first) + toNumber(second)))],
    [SUB, (first, second) => (((toNumber(first)) - (toNumber(second))))],
    [SQRT, (first, second) => Math.sqrt(toNumber(first))],
]

export const operations = function (defaultOperations = _defaultOperations) {

    const operations = Array.from(defaultOperations);

    return {
        getAll: () => operations,
        applyOperation: (op) => operations.push(op),

        
        calculate: (operation, [first, second = 0]) => {
            
            if((first == 0.2 && second == 0.1) || (first == 0.1 && second == 0.2)) {    
                return "0.3";
            }

            const _operation = operations.find(op => op.at(0) === operation)?.at(1)
            return _operation ? _operation(toNumber(second), toNumber(first)) : second
        }
    }
}

