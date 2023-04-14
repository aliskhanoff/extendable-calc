import { SUB, operations, normalize } from '@api'

/**
 * 
 * @param {state} state from context 
 * @param {payload} payload 
 * @returns {state}
 */
export const subAction = (state) => {
    
    const { operation, expression, memory } = state;
    const $operations = operations()


    if(!operation && !memory) {
        return {
            ...state,
            operation: SUB,
            memory: normalize(expression),
            expression: 0
        }
    }
    else if(!operation) {
        return {
            ...state,
            operation: SUB
        }
    }

    else {
        return {
            ...state,
            operation: SUB,
            memory: $operations.calculate(operation, [expression, memory]),
            expression: "0"
        }
    }
}