import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import ToDo from './components/ToDo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDo/>
  </React.StrictMode>,
)
