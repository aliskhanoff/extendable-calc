import React from 'react'
import './styles/frame.scss'
import { NumericButton, ActionButton, Display, ButtonBase } from '@ui'
import {  CLR, SUB, ADD, DIV, MUL, EQM } from '@api'


export const Frame = ({ className = '', display, left, right, footer, ...rest }) => {

  return (
    <section {...rest} className={ `frame transition-[scale] md:scale-125 lg:scale-150 shadow-sm gap-1 ${className}` }>
        
        <header className="header inline-flex flex-col w-full px-1 justify-end items-end font_calc bg-slate-100 hover:text-slate-500 transition-colors">
            <Display />
        </header>

        <main className="main flex gap-1 py-1">

            <div className="left relative rounded-lg h-40 grid gap-1 grid-cols-3 grid-rows-4 grow-[3]">
                
                <ActionButton className={`bg-orange-400`} action={{ type: CLR }}> C </ActionButton>
                <ActionButton action={{ type: SUB }}>-</ActionButton>
                <ActionButton action={{ type: ADD }}>+</ActionButton>
                {left}

            </div>

            <div className="right grow-[1] grid grid-rows-4 gap-1 ">

                <ActionButton action={{ type: MUL }}>*</ActionButton>
                <ActionButton action={{ type: DIV }}>/</ActionButton>
                <ActionButton action={{ type: EQM }}>=</ActionButton>
                
                <NumericButton num={"0"}/>
            
            </div>

        </main>

        <footer className="footer py-2 self-center inline-flex w-full bg-slate-100 h-auto">
            
            
            
            {footer}

        </footer>

    </section>
  )

}

export default Frame