
const _defaultOperations = [
    ["*", (first, second) => first * second],
    ["/", (first, second) => first / second],
    ["+", (first, second) => first + second],
    ["-", (first, second) => first - second],
]

const operations = function (defaultOperations = _defaultOperations) {

    const $operations = Array.from(defaultOperations);

    return {
        getAll: () => $operations,
        applyOperation: (op) => $operations.push(op),

        calculate: (operation, [first, second = 0]) => {
            const _operation = $operations.find(op => op.at(0) === operation).at(1)
            return _operation ? _operation(first, second) : null
        }
    }
}

const REGEX_NUM = /^\d+(\.(?=)\d+){0,1}$/

const ADD = '+'
const SUB = '-'
const DIV = '/'
const MUL = '*'
const PNT = '.'

const EQM = 'EQUALITY_MARK'

const CLR = 'CLEAR'
const RMC = 'REMOVE_CHAR'

String.prototype.toNumber = function () {

    if(!this.match(REGEX_NUM)) {return null;}

    if(this.includes('.')) {
        return parseFloat(this)
    }

    return parseInt(this);
}

String.prototype.removeLast = function () {
    return this.substring(0, this.length - ONE)
}

String.prototype.normalize = function () {

    if(this.match(/\d+\.[0]{1,}$/)) {
        return this.split(".")[0]
    }

    return this;
}

String.prototype.toOperation = function (operations = []) {
    
    const currentOperation = operations.find(op => this.includes(op.at(0)));
    
    if(!currentOperation) return null;

    
    const splitted = this.split(currentOperation.at(0)).map(s => {
        return s.normalize().toNumber()
    });


    return [ currentOperation.at(0), splitted ];
}

describe('Should execute all the operations correctly', () => { 

    test('Should execute ADD operation', () => { 

        const $operations = operations()
        const toOperated = "2.5+2.6".toOperation($operations.getAll())

        expect($operations.calculate(toOperated.at(0), toOperated.at(1))).toEqual(5.1)
    })
    
    test('Should execute SUB operation', () => { 
        const $operations = operations()
        const toOperated = "10-2.5".toOperation($operations.getAll())

        expect($operations.calculate(toOperated.at(0), toOperated.at(1))).toEqual(7.5)
    })
    
    test('Should execute DIV operation', () => { 
        const $operations = operations()
        const toOperated = "50/2".toOperation($operations.getAll())

        expect($operations.calculate(toOperated.at(0), toOperated.at(1))).toEqual(25)
    })

    test('Should execute MUL operation', () => { 
        const $operations = operations()
        const toOperated = "50*2".toOperation($operations.getAll())

        expect($operations.calculate(toOperated.at(0), toOperated.at(1))).toEqual(100)
    })

})