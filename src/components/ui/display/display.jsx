import React, { useContext } from 'react'
import { CalcContext } from '@context'

export const Display = ({ }) => {

    const { state: { expression, result }, action } = useContext(CalcContext)

    

    return (
    <div className='calc flex flex-col justify-end items-end px-1'>
        <div className='text-sm py-0'>{ result }</div>
        <div className='text-2xl py-0 inline-flex overflow-hidden'>{ expression }</div>
    </div>
    )
}

export default Display