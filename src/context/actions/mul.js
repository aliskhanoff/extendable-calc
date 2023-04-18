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

    if((!operation && memory == 0) && expression) {
        return {
            ...state,
            operation: MUL,
            memory: normalize(expression),
            expression: 0
        }
    } else if(!operation && !memory) {
        return {
            ...state,
            operation: MUL,
            memory: normalize(expression),
            expression: 0
        }
    }
    
    else if(operation) {
        return {
            ...state,
            expression: 0,
            operation: MUL,
            memory: $operations.calculate(operation, [expression, memory]),
        }
    }
    else {
        return {
            ...state,
            operation: MUL,
            memory: $operations.calculate(operation, [memory, expression]),
            expression: "0"
        }
    }
}