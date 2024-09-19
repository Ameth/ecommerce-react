import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../context/filters'
import { useCart } from '../hooks/useCart'

export function Footer() {
  const context = useContext(FiltersContext)
  const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>Ecommerce React</h4>
      <span>by @amethgabriel</span>
      <h5>Category: {context.filter.category}</h5>
      <h5>Price: ${context.filter.minPrice}</h5>
      {/* <h5>Cart: {JSON.stringify(cart, null, 2)}</h5> */}
    </footer>
  )
}
