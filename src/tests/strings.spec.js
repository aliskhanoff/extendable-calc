const REGEX_NUM = /^\d+(\.(?=)\d+){0,1}$/
const ONE = 1

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
    
    const currentOperation = operations.find(op => this.includes(op));

    if(!currentOperation) return null;

    let splitted = this.split(currentOperation).map(s => {
        if(s.match(REGEX_NUM)) return parseFloat(s)
        return parseInt(s)
    });

    return [ currentOperation, splitted ];
}


describe('Should operate with user string', () => { 
    
    test('Should convert to number', () => { 
        expect('123'.toNumber()).toEqual(123);    
        expect('123.55'.toNumber()).toEqual(123.55);    
    })

    test('Should remove last char', () => { 
        expect('123.444'.removeLast()).toEqual('123.44');    
    })

    test('Should convert 1.00 => 1', () => { 
        expect('123.000'.normalize()).toEqual('123');    
    })

    test('Should convert string to operation', () => { 
        
        const defaultOperations = ['*', '/', '-', '+'];

        expect('2*2'.toOperation(defaultOperations)).toEqual(['*', [2, 2]]);    
        expect('2/2'.toOperation(defaultOperations)).toEqual(['/', [2, 2]]);    
        expect('2-2'.toOperation(defaultOperations)).toEqual(['-', [2, 2]]);    
        expect('2+2'.toOperation(defaultOperations)).toEqual(['+', [2, 2]]);   
        expect('2+2.5'.toOperation(defaultOperations)).toEqual(['+', [2, 2.5]]);   

    })

})