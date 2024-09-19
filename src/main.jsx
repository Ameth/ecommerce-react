// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import { CartProvider } from './context/cart.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FiltersProvider>
)
