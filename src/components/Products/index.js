function Products(props) {
  //props.products
  return (
    <div className="products-list">
      {props.products.map((product) => {
        return (
          <div
            style={{ border: "1px solid purple", padding: "25px" }}
            className="product"
          >
            Image
            <br />
            {product.name}
            <br />
            ${product.price}
            <br />
            Category: {product.category}
            <br />
            <button onClick={() => props.updateCart([...props.cart, product.id])}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
