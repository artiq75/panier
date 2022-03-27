export function Cart({ products, onRemove, onClean }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <CartItem product={product} onRemove={onRemove} />
          </li>
        ))}
      </ul>
      <button onClick={onClean}>Supprimer tous les produits</button>
    </>
  )
}

function CartItem({ product, onRemove }) {
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
