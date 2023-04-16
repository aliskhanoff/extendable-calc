export const REGEX_NUM = /^\-?\d+(\.(?=)\d+){0,1}$/

export const ADD = 'ADD'
export const SQRT = 'SQRT'
export const SUB = 'SUB'
export const DIV = 'DIV'
export const MUL = 'MUL'
export const PNT = 'FLOAT'

export const CHANGE_SIGN = 'CHANGE_SIGN'

export const EQM = 'EQUALITY_MARK'

export const CLR = 'CLEAR'
export const RMC = 'REMOVE_CHAR'
export const APPEND_NUM = 'APPEND_NUM'
export const BACKSPACE = 'BACKSPACE'

export const USER_THEME         = "USER_THEME"
export const USER_THEME_LIGHT   = "light"
export const USER_THEME_DARK    = "dark"

export const toNumber = function (pattern) {

    pattern = pattern.toString();

    if(!pattern.match(REGEX_NUM)) { return null; }

    if(pattern.includes('.')) {
        return parseFloat(pattern)
    }

    return parseInt(pattern);
}

export const removeLast = function (pattern) {
    return pattern.substring(0, pattern.length - ONE)
}

export const normalize = function (pattern) {
    
    pattern = pattern.toString()

    if(pattern.match(/\d+\.[0]{1,}$/)) {
        return pattern.split(".")[0]
    }

    else if(pattern?.at(-1) === '.') {
        return removeLast(pattern)
    }

    return pattern;
}