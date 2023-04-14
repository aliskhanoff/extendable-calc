import { SQRT, operations, normalize } from '@api'

export const sqrtAction = (state) => {
    
    const { operation, expression, memory } = state;
    const $operations = operations()

    return {
        ...state,
        operation: false,
        expression: $operations.calculate(SQRT, [memory, expression]),
    }
}