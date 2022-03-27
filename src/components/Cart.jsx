export function Cart({ products, dispatch }) {
  const handleClean = function () {
    dispatch({ type: 'CLEAN' })
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <CartItem product={product} dispatch={dispatch} />
          </li>
        ))}
      </ul>
      <button onClick={handleClean}>Supprimer tous les produits</button>
    </>
  )
}

function CartItem({ product, dispatch }) {
  const handleRemove = function () {
    dispatch({ type: 'REMOVE', payload: product })
  }

  const handleDecrease = function () {
    dispatch({ type: 'DECREASE', payload: product })
  }

  return (
    <article>
      <p>
        {product.title}
        <br />
        quantité: {product.quantity}
      </p>
      {product.quantity > 1 && (
        <button onClick={handleDecrease}>diminuer</button>
      )}
      <button onClick={handleRemove}>supprimer</button>
    </article>
  )
}
