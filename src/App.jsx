import { createContext, useState, useReducer, useEffect, useMemo } from 'react'
import { cartReducer } from './cartReducer'
import { Cart } from './components/Cart'
import { Product } from './components/Product'

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

export const CartContext = createContext()

function App() {
  const [products, setProducts] = useState([])
  const [cart, dispatch] = useReducer(cartReducer, [])

  useEffect(() => {
    fetch(BASE_URL_API)
      .then((response) => response.json())
      .then((products) => setProducts(products))
  }, [])

  const value = useMemo(() => {
    return {
      cart,
      dispatch,
    }
  }, [cart])

  return (
    <>
      <fieldset>
        <legend>Panier:</legend>
        {cart.length > 0 && <Cart products={cart} dispatch={dispatch} />}
      </fieldset>
      <fieldset>
        <legend>Produits:</legend>
        <CartContext.Provider value={value}>
          <Product products={products} />
        </CartContext.Provider>
      </fieldset>
    </>
  )
}

export default App
