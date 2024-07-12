import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import './index.css'
import {appStarted} from "@/shared/config/initialization";

appStarted()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
