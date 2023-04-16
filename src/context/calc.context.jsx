import React from 'react'
import { APPEND_NUM, CLR, ADD, DIV, SUB, MUL, EQM, SQRT } from '@api'
import { addAction, divAction, subAction, mulAction, eqmAction, sqrtAction } from './actions'
import { toNumber, normalize, operations } from '@api'


export const CalcContext = React.createContext(null)


const reducer = (state, { type, payload }) => {

    switch (type) {

        case APPEND_NUM: {

            //if we have reached the max length
            if(state.expression.length > 19) { return state; }

            //if currenly we adding 0 to a 0
            else if(state.expression == 0 && payload == 0) { return state }

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

        //clear
        case CLR: {
          return {
            ...state,
            memory: 0,
            expression: 0,
            operation: false
          }
        }

        case EQM: { return eqmAction(state) }

        case ADD: { return addAction(state) }

        case SUB: { return subAction(state) }

        case DIV: { return divAction(state) }

        case MUL: { return mulAction(state) }
        
        case SQRT: { return sqrtAction(state) }

        default: return state;

    }

}

export const CalcProvider = ({ children }) => {
  

  const [state, dispatch] = React.useReducer(reducer, { expression: 0, memory: 0, operation: false })



  return (
    <CalcContext.Provider value={{ state, dispatch }}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider