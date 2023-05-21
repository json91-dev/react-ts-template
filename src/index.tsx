import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ReactQueryProvider } from '@/queries'
import { Provider } from 'react-redux'
import store from '@/store/store'

const rootNode = document.getElementById('root')
ReactDOM.createRoot(rootNode).render(
  <Suspense fallback={''}>
    <ReactQueryProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ReactQueryProvider>
  </Suspense>,
)
