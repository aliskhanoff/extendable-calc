import React from 'react'
import { Wrapper, Display, ButtonBase } from '@ui'
import { TiTimes, TiPlus, TiMinus, TiDivide } from 'react-icons/ti'


export const App = () => {

  return (
    <div className="calc__app font_calc flex justify-center items-center bg-slate-100 w-full h-[100vh] text-slate-300">
        <Wrapper display={ <Display /> } buttons = {
          <React.Fragment>
            <ButtonBase className='text-2xl hover:bg-slate-300 rounded-lg'>
              <TiPlus />
            </ButtonBase>

            <ButtonBase className='text-2xl'>
              <TiMinus />
            </ButtonBase>
            
            <ButtonBase className='text-2xl'>
              <TiDivide />
            </ButtonBase>

            <ButtonBase className='text-2xl'>
              <TiTimes />
            </ButtonBase>

          </React.Fragment>
        } />
    </div>
  )
}

export default App
