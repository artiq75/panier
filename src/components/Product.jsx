export function Product({ products, onAdd }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} onAdd={onAdd} />
        </li>
      ))}
    </ul>
  )
}

function ProductItem({ product, onAdd }) {
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
