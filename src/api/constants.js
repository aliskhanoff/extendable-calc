export const REGEX_NUM = /^\d+(\.(?=)\d+){0,1}$/

export const ADD = '+'
export const SUB = '-'
export const DIV = '/'
export const MUL = '*'
export const PNT = '.'

export const EQM = 'EQUALITY_MARK'

export const CLR = 'CLEAR'
export const RMC = 'REMOVE_CHAR'

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