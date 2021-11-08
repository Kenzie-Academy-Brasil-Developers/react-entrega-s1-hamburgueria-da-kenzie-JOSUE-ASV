import Product from "../Product";

function MenuContainer({ products, handleClick, filteredProducts }) {
  return (
    <>
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))
        : products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))}
    </>
  );
}

export default MenuContainer;
