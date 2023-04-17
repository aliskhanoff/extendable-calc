export const float = (state) => {

    const { expression } = state;

    //if we already have . in the number, then skip
    if(/^\d+\.$/.test(expression)) {
        return state;
    }

    return {
        ...state,
        expression: expression + "." //otherwise add .
    };
}