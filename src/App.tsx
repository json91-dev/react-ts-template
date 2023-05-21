import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '@/pages/main'
import '@/scss/style.scss'
import DefaultLayout from '@/layout/DefaultLayout'

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <DefaultLayout>
            <MainPage />
          </DefaultLayout>
        }
      />
    </Routes>
  )
}

export default App
