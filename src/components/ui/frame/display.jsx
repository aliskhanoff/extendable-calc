import React, { useContext } from 'react'
import { CalcContext } from '@context'
export const Display = () => {

    const { state: { expression, memory, operation } } = useContext(CalcContext)

    

    return (
        <div className='py-2 flex flex-col'>
            <p className={ `font-calc text-sm self-end` }>{ memory } { operation }</p>
            <p className={ `font-calc text-4xl self-end ${ expression.length > 14 && 'text-2xl' } ` }>{ expression.toString().substring(0, 13) }</p>
        </div>
    )
}

export default Display