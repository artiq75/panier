export function Product({ products, cart, dispatch }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} cart={cart} dispatch={dispatch} />
        </li>
      ))}
    </ul>
  )
}

function ProductItem({ product, cart, dispatch }) {
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
