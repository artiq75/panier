import { useState, useReducer, useEffect } from 'react'
import { cartReducer } from './cartReducer'
import { Cart } from './components/Cart'
import { Product } from './components/Product'

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

function App() {
  const [products, setProducts] = useState([])
  const [cart, dispatch] = useReducer(cartReducer, [])

  useEffect(() => {
    fetch(BASE_URL_API)
      .then((response) => response.json())
      .then((products) => setProducts(products))
  }, [])

  return (
    <>
      <fieldset>
        <legend>Panier:</legend>
        {cart.length > 0 && <Cart products={cart} dispatch={dispatch} />}
      </fieldset>
      <fieldset>
        <legend>Produits:</legend>
        <Product products={products} cart={cart} dispatch={dispatch} />
      </fieldset>
    </>
  )
}

export default App
