// import { products as mocksProducts } from './mocks/products.json'
import { Products } from './Components/Products'
// import { useState } from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Cart } from './Components/Cart'

function App() {
  // const { filter, filteredProducts, setFilter } = useFilters()

  return (
    <>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </>
  )
}

export default App
