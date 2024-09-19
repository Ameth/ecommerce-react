import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { useCart } from '../hooks/useCart'

export function Products() {
  const context = useContext(FiltersContext)
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((p) => p.id === product.id)
  }

  const toggleAddOrRemoveCart = (product) => {
    if (checkProductInCart(product)) {
      removeFromCart(product)
    } else {
      addToCart(product)
    }
  }
  return (
    <main className='products'>
      <ul>
        {context.filteredProducts.map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
              </div>
              <span>{product.price}</span>
              <div>
                <button style={{ color: isProductInCart ? '#f00' : '#09f' }} onClick={() => toggleAddOrRemoveCart(product)}>
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
