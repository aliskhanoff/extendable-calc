import React from 'react'

export const ButtonBase = ({ className = '', size='base', children, ...rest }) => {
  return (
    <button className={ `px-1 py-1 text-slate-300 hover:text-slate-400 ${className}` }>
        { children }
    </button>
  )
}

export default ButtonBase