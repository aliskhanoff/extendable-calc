import { DIV, operations, normalize } from '@api'

/**
 * 
 * @param {state} state from context 
 * @param {payload} payload 
 * @returns {state}
 */
export const divAction = (state) => {
    
    const { operation, expression, memory } = state;
    const $operations = operations()


    if(!operation && !memory) {
        return {
            ...state,
            operation: DIV,
            memory: normalize(expression),
            expression: 0
        }
    }

    else if(!operation) {
        return {
            ...state,
            operation: DIV
        }
    }

    else {
        return {
            ...state,
            operation: DIV,
            memory: $operations.calculate(operation, [memory, expression]),
            expression: "0"
        }
    }
}