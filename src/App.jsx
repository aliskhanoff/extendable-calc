import React, { useContext } from 'react'
import { Frame, NumericButton} from '@ui'
import { CalcContext } from '@context'

export const App = () => {

  const { state: { theme } } = useContext(CalcContext)

  return (
    <div className={`${theme}`}>
    <div className={`calc__app font_calc flex justify-center items-center h-screen bg-slate-100 dark:bg-slate-600`}>
        
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
    </div>
  )
}

export default App
