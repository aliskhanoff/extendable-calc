
export const changeSign = ( state ) => {

    return {
        ...state,
        expression: - (state.expression)
    }
}