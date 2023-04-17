export const append = (state, { payload }) => {

    //if we have reached the max length
    if(state.expression.length > 19) { return state; }

    //if currenly we adding 0 to a 0
    else if(state.expression == 0 && payload == 0) { return state }

    else if(/^\d+\.$/.test(state.expression)) {
        return {
            ...state,
            expression: state.expression + payload
        }
    }

    else if(state.expression == 0) {
      
      return {
        ...state,
        expression: payload
      }

    }

    return {
      ...state,
      expression: state.expression + payload
    }
    
}