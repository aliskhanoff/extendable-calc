import React, { useContext } from 'react'
import { CalcContext } from '@context'
import { APPEND_NUM } from '@api'

import { ButtonBase } from '@ui'

export const NumericButton = ({ num, className = "", ...rest }) => {

  const { dispatch } = useContext(CalcContext)
  
  return (<ButtonBase {...rest} onClick={ () => dispatch({ type: APPEND_NUM, payload: num  }) } className={` ${className}`}>{ num }</ButtonBase>)
}

export default NumericButton