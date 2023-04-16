import React, { useContext } from 'react'
import { CalcContext } from '@context'
import { ButtonBase } from '@ui'


export const ActionButton = ({ className = "", action, children, ...rest }) => {

    const { dispatch, state: { operation } } = useContext(CalcContext)
    
    return (<ButtonBase onClick={ () => dispatch(action) } {...rest} className={`${className}`}>{ children }</ButtonBase>)
}

export default ActionButton