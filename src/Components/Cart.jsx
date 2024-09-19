import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

export function Cart() {
  const cardCheckboxId = useId()
  const { cart, addToCart, restToCart, clearCart } = useCart()

  return (
    <>
      <label htmlFor={cardCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cardCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <span>{product.price}</span>
              </div>
              <footer>
                <button onClick={() => restToCart(product)}>-</button>
                <span>Cant: {product.quantity}</span>
                <button onClick={() => addToCart(product)}>+</button>
              </footer>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
