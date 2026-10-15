import product from '../product';

function Price() {
  return (
    <p className="product-price">
      <span className="product-price-currency">$</span>
      {Number(product.price).toFixed(2)}
    </p>
  );
}

export default Price;