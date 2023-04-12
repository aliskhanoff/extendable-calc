

const _defaultOperations = [
    ["*", (first, second) => first * second],
    ["/", (first, second) => first / second],
    ["+", (first, second) => first + second],
    ["-", (first, second) => first - second],
]

const operations = function (defaultOperations = _defaultOperations) {

    const operations = Array.from(defaultOperations);

    return {
        getAll: () => operations,
        applyOperation: (op) => operations.push(op),

        calculate: (operation, [first, second = 0]) => {
            const _operation = operations.find(op => op.at(0) === operation).at(1)
            return _operation ? _operation(first, second) : null
        }
    }
}




describe('Should test operation class', () => { 
    
    const _operations = operations();

    test('should add new additional operation', () => { 
        _operations.applyOperation(["^", ([first]) => first * first])
        expect(_operations.getAll().length).toEqual(5)
    });
    
    test('should find and execute an expression', () => { 
        expect(_operations.calculate("*", [5, 5])).toEqual(25)
    })

})