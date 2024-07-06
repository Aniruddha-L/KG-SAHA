import React from 'react'
import ReactDOM from 'react-dom/client'
import Headbar from './Components/Headbar'
import '../src/Static/Style/Index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headbar></Headbar>
    <App></App>
  </React.StrictMode>,
)
