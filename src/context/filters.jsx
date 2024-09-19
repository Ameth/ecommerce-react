import { products as mocksProducts } from '../mocks/products.json'
import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  // const [minPrice, setMinPrice] = useState(0)

  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      )
    })
  }

  const filteredProducts = filterProducts(mocksProducts)

  return (
    <FiltersContext.Provider
      value={{ filter, filteredProducts, setFilter }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
