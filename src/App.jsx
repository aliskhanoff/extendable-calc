import React from 'react'
import { Frame, NumericButton} from '@ui'


export const App = () => {

  return (
    <div className="calc__app font_calc flex justify-center items-center bg-slate-100 w-full h-[100vh] text-slate-300">
        
        <Frame left={
          <React.Fragment>
                <NumericButton num={`1`} />
                <NumericButton num={`2`} />
                <NumericButton num={`3`} />
                <NumericButton num={`4`} />
                <NumericButton num={`5`} />
                <NumericButton num={`6`} />
                <NumericButton num={`7`} />
                <NumericButton num={`8`} />
                <NumericButton num={`9`} />
          </React.Fragment>
        } />

    </div>
  )
}

export default App
