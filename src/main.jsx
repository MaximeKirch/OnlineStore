import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import '@fontsource/kumbh-sans/400.css'
import '@fontsource/kumbh-sans/700.css'

import { Provider } from 'react-redux'
import {store} from "./Redux/store"
import { fetchProducts } from './Redux/Reducers/products'

store.dispatch(fetchProducts())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
