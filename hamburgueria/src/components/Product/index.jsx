import "./product.css";

function Product({ product, handleClick }) {
  console.log(product);
  return (
    <div className="produto">
      <div className="image">
        <img src={product.img} alt={product.name}></img>
      </div>

      <p className="name">{product.name}</p>
      <p className="category">{product.category}</p>
      <p className="price">R${product.price},00</p>
      <button
        className="button"
        onClick={() => {
          handleClick(product.id);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default Product;
