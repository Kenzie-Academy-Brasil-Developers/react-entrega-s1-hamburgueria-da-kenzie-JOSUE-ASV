import "./product.css";

function Product({ product, handleClick }) {
  console.log(product);
  return (
    <section className="seção">
      <div className="produto">
        <img src={product.img} alt={product.name}></img>
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <button
          onClick={() => {
            handleClick(product.id);
          }}
        >
          Adicionar
        </button>
      </div>
    </section>
  );
}

export default Product;
