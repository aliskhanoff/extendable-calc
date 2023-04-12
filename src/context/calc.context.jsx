import React from 'react'

export const CalcContext = React.createContext(null)


export const CalcProvider = ({ children }) => {
  
  const reducer = (state, action) => state;

  const [state, dispatch] = React.useReducer(reducer, { expression: 0, result: 0 })



  return (
    <CalcContext.Provider value={{ state, dispatch }}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider