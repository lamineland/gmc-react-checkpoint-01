import product from '../product';

function Image() {
  return (
    <div className="product-image-wrapper">
      <img className="product-image" src={product.image} alt={product.name} />
    </div>
  );
}

export default Image;