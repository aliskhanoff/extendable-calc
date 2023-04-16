export const backspace = (state) => {

    const { expression } = state;



    if(/^\-\d$/.test(expression.toString())) {

        return {
            ...state,
            expression: 0
        }
    }
    
    else if(expression == 0) {
        return state;
    }

    return {
        ...state,
        expression: expression.toString().substring(0, expression.toString().length - 1)
    }

}