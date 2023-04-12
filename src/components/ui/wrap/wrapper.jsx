import React from 'react'

export const Wrapper = ({ className = '', display, buttons, children, ...rest }) => {
  return (
    <div className={`calc__wrapper calc rounded-lg gap-1 overflow-hidden px-1 py-1 flex flex-col justify-center items-center bg-slate-200`}>
        
        <div className='display__wrapper border-2 inline-flex flex-col items-end justify-end border-slate-300 rounded-lg w-60 h-16'>
          {display}
        </div>

        <div className='buttons__wrapper h-64 w-fullrounded-lg'>
          {buttons}
        </div>

    </div>
  )
}

export default Wrapper