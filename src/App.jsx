import React from 'react'
import Header from './common/header'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import ProductInfo from './components/productInformation'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ProductInfo />
    </div>
  )
}

export default App