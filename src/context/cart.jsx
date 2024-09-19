import { createContext, useReducer } from 'react'

export const CartContext = createContext()

const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

const updateCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TO_CART': {
      const indexProduct = state.findIndex((p) => p.id === payload.id)
      if (indexProduct === -1) {
        const newState = [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ]
        updateCart(newState)
        return newState
      } else {
        const newState = structuredClone(state)
        newState[indexProduct].quantity += 1
        updateCart(newState)
        return newState
      }
    }
    case 'REST_TO_CART': {
      const indexProduct = state.findIndex((p) => p.id === payload.id)
      if (indexProduct >= 0) {
        if (state[indexProduct].quantity > 1) {
          const newState = structuredClone(state)
          newState[indexProduct].quantity -= 1
          updateCart(newState)
          return newState
        }
      }
    }
    case 'REMOVE_FROM_CART': {
      const newState = state.filter((p) => p.id !== payload.id)
      updateCart(newState)
      return newState
    }
    case 'CLEAR_CART': {
      updateCart([])
      return []
    }
  }
}

export const CartProvider = ({ children }) => {
  //   const [cart, setCart] = useState([])
  const [cart, dispatch] = useReducer(reducer, cartInitialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const restToCart = (product) => {
    dispatch({ type: 'REST_TO_CART', payload: product })
  }

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, restToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
