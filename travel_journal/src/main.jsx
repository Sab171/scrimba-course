import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core';
import "./style.css"



ReactDOM.createRoot(document.getElementById('root')).render(

    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  

  
)
