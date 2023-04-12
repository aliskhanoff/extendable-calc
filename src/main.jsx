import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/tailwind.scss'
import { CalcProvider } from '@context'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <CalcProvider>
        <App />
    </CalcProvider>

)
