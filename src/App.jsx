import { useState, useEffect, useCallback } from 'react'

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
          <>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  <CartItem product={product} onRemove={handleRemove} />
                </li>
              ))}
            </ul>
            <button onClick={handleClean}>Supprimer tous les produits</button>
          </>
        )}
      </fieldset>
      <fieldset>
        <legend>Produits:</legend>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} onAdd={handleAdd} />
            </li>
          ))}
        </ul>
      </fieldset>
    </>
  )
}

export function CartItem({ product, onRemove }) {
  const handleRemove = function () {
    onRemove(product)
  }

  return (
    <article>
      <p>
        {product.title}
        <br />
        quantité: {product.quantity}
      </p>
      <button onClick={handleRemove}>supprimer</button>
    </article>
  )
}

export function ProductItem({ product, onAdd }) {
  const handleAdd = function () {
    onAdd(product)
  }

  return (
    <article>
      <h2>{product.title}</h2>
      <p>
        <strong>{product.price} €</strong>
      </p>
      <button onClick={handleAdd}>Ajouter au panier</button>
    </article>
  )
}

export default App
