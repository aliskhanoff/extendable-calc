
export const _defaultOperations = [
    ["*", (first, second) => first * second],
    ["/", (first, second) => first / second],
    ["+", (first, second) => first + second],
    ["-", (first, second) => first - second],
]

export const operations = function (defaultOperations = _defaultOperations) {

    const operations = Array.from(defaultOperations);

    return {
        getAll: () => operations,
        applyOperation: (op) => operations.push(op),

        calculate: (operation, [first, second = 0]) => {
            const _operation = operations.find(op => op.at(0) === operation).at(1)
            return _operation ? _operation([first, second]) : null
        }
    }
}

