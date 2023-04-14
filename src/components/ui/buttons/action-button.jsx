import React, { useContext } from 'react'
import { CalcContext } from '@context'
import { ButtonBase } from '@ui'


export const ActionButton = ({ className = "", action, children, ...rest }) => {

    const { dispatch, state: { operation } } = useContext(CalcContext)
    

    // {  }

    return (<ButtonBase onClick={ () => dispatch(action) } {...rest} className={` ${operation === action.type && 'bg-emerald-200 hover:bg-emerald-300 text-emerald-600'} ${className}`} href="">{ children }</ButtonBase>)
}

export default ActionButton