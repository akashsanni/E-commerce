import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/app/store'
import { AuthContextProvider } from './store/AuthContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Provider store={store} >
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>

    </BrowserRouter>

)
