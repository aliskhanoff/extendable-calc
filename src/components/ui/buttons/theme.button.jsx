import React, { useContext } from 'react'
import { CalcContext } from '@context'
import { ButtonBase } from '@ui'
import { MdNightsStay } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

import { USER_THEME } from '@api'

export const ThemeButton = ({ children, ...rest }) => {

  const { state: { theme }, dispatch } = useContext(CalcContext)

  

  return (<ButtonBase className={`py-3`} {...rest} onClick={ () => dispatch({ type: USER_THEME, payload: (theme === 'dark' ? 'light': 'dark') }) } {...rest}>
        { theme == 'light' && <MdNightsStay /> }
        { theme == 'dark' && <BsFillSunFill /> }
    </ButtonBase>)
}

export default ThemeButton