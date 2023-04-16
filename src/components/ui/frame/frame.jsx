import React from 'react'
import './styles/frame.scss'
import { NumericButton, ActionButton, Display, ThemeButton } from '@ui'
import {  CLR, SUB, ADD, DIV, MUL, EQM, SQRT, CHANGE_SIGN, BACKSPACE } from '@api'
import { TbSquareRoot2, TbPlusMinus } from 'react-icons/tb'
import { RiDeleteBack2Line } from 'react-icons/ri'

export const Frame = ({ className = '', display, left, right, footer, ...rest }) => {

  return (
    <section {...rest} className={ `frame md:scale-125 dark:bg-slate-700 lg:scale-150 shadow-sm gap-1 transition-colors ${className}` }>
        
        <header className="header inline-flex flex-col w-full px-1 justify-end items-end font_calc text-slate-400 bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-500 hover:text-slate-900 transition-colors ">
            <Display />
        </header>

        <main className="main flex gap-1 py-1 ">

            <div className="left relative rounded-lg h-40 grid gap-1 grid-cols-3 grid-rows-4 grow-[3]">
                
                <ActionButton action={{ type: CLR }}> C </ActionButton>
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

        <footer className="footer py-2 self-center w-full h-auto grid grid-cols-4 gap-1 grid-rows-1">
                <ActionButton action={{ type: SQRT }}><TbSquareRoot2 /></ActionButton>
                <ActionButton action={{ type: CHANGE_SIGN }}><TbPlusMinus /></ActionButton>
                <ActionButton action={{ type: BACKSPACE }}><RiDeleteBack2Line /></ActionButton>
                <ThemeButton />
                
            {footer}

        </footer>

    </section>
  )

}

export default Frame