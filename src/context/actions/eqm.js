import { EQM, operations, normalize } from '@api'

/**
 * 
 * @param {state} state from context 
 * @param {payload} payload 
 * @returns {state}
 */
export const eqmAction = (state) => {
    
    const { operation, expression, memory } = state;
    const $operations = operations()

    if(!expression) {
        return state;
    }

    return  {
        ...state,
        memory: $operations.calculate(operation, [expression, memory]),
        expression: "0",
        operation: false
    }

}