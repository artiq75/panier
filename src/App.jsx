import { useState, useEffect, useCallback } from 'react'
import { Cart } from './components/Cart'
import { Product } from './components/Product'

const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(BASE_URL_API)
      .then((response) => response.json())
      .then((products) => setProducts(products))
  }, [])

  const handleAdd = useCallback(
    (newProduct) => {
      const oldProduct = cart.find(
        (oldProduct) => oldProduct.id === newProduct.id
      )
      if (oldProduct) {
        oldProduct.quantity++
      } else {
        cart.unshift({ ...newProduct, quantity: 1 })
      }
      setCart([...cart])
    },
    [cart]
  )

  const handleRemove = useCallback(
    (product) =>
      setCart((oldProducts) =>
        oldProducts.filter((oldProduct) => oldProduct.id !== product.id)
      ),
    []
  )

  const handleClean = () => setCart([])

  return (
    <>
      <fieldset>
        <legend>Panier:</legend>
        {cart.length > 0 && (
          <Cart products={cart} onRemove={handleRemove} onClean={handleClean} />
        )}
      </fieldset>
      <fieldset>
        <legend>Produits:</legend>
        <Product products={products} onAdd={handleAdd} />
      </fieldset>
    </>
  )
}

export default App
