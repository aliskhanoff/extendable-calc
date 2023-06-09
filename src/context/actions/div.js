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

    if((!operation && memory == 0) && expression) {
        return {
            ...state,
            operation: DIV,
            memory: normalize(expression),
            expression: 0
        }
    } 
    
    else if(!operation && !memory) {
        return {
            ...state,
            operation: DIV,
            memory: normalize(expression),
            expression: 0
        }
    }

    else if(operation && memory) {
        return {
            ...state,
            operation: DIV,
        }
    }

    else if(operation) {
        return {
            ...state,
            expression: 0,
            operation: DIV,
            memory: $operations.calculate(operation, [expression, memory]),
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