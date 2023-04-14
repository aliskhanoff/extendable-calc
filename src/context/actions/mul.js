import { MUL, operations, normalize } from '@api'


/**
 * 
 * @param {state} state from context 
 * @param {payload} payload 
 * @returns {state}
 */
export const mulAction = (state) => {
    
    const { operation, expression, memory } = state;
    const $operations = operations()


    if(!operation && !memory) {
        return {
            ...state,
            operation: MUL,
            memory: normalize(expression),
            expression: 0
        }
    }
    
    else if(!operation) {
        return {
            ...state,
            operation: MUL
        }
    }
    else {
        return {
            ...state,
            operation: MUL,
            memory: $operations.calculate(operation, [expression, memory]),
            expression: "0"
        }
    }
}