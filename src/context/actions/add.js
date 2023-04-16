import { ADD, operations, normalize } from '@api'

/**
 * @param {state} state from context 
 * @param {payload} payload 
 * @returns {state}
 */
export const addAction = (state) => {
    
    const { operation, expression, memory } = state;
    const $operations = operations()

    if((!operation && memory == 0) && expression) {
        return {
            ...state,
            operation: ADD,
            memory: normalize(expression),
            expression: 0
        }
    }

    else  if(!operation) {
        return {
            ...state,
            operation: ADD
        }
    }

    else {
        return {
            ...state,
            operation: ADD,
            memory: $operations.calculate(operation, [memory, expression]),
            expression: "0"
        }
    }
}