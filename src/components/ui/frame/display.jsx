import React, { useContext } from 'react'
import { CalcContext } from '@context'
export const Display = () => {

    const { state: { expression, memory } } = useContext(CalcContext)

    return (
        <React.Fragment>
            { memory && <p className={ `font-calc text-sm } ` }>{ memory }</p> }
            <p className={ `font-calc text-4xl ${ expression.length > 14 && 'text-2xl' } ` }>{ expression }</p>
        </React.Fragment>
    )
}

export default Display