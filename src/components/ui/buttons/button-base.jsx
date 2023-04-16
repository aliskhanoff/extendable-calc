import React from 'react'

export const ButtonBase = ({ children, className = '', ...rest }) => {
  return (
    <button type='button' className={`font_calc font-bold inline-flex rounded-sm justify-center items-center transition-colors text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:bg-slate-600 dark:text-slate-400 bg-slate-100 hover:bg-slate-300 hover:text-slate-500 ${ className && className }`} {...rest}>{ children }</button>
  )
}

export default ButtonBase