import { useContext } from 'react'
import { CartContext } from '../App'

export function Product({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  )
}

function ProductItem({ product }) {
  const { cart, dispatch } = useContext(CartContext)

  const handleAdd = function () {
    let type = 'ADD'
    const isAdded = cart.some((item) => item.id === product.id)
    if (isAdded) {
      type = 'INCREASE'
    }
    dispatch({ type, payload: product })
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
