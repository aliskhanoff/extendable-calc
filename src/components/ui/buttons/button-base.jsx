import React from 'react'

export const ButtonBase = ({ children, className = '', ...rest }) => {
  return (
    <button type='button' className={`font_calc font-bold inline-flex rounded-sm justify-center items-center transition-colors bg-slate-100 hover:bg-slate-300 hover:text-slate-500 ${ className && className }`} {...rest}>{ children }</button>
  )
}

export default ButtonBase