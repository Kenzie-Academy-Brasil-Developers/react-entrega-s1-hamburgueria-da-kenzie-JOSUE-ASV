function ShoppingCart({ currentSale, setCurrentSale }) {
  function remove(x) {
    const arrayNull = currentSale.filter((value) => value !== x);
    setCurrentSale(arrayNull);
  }

  function removeAll() {
    const lamp = [];
    setCurrentSale(lamp);
  }

  function some(currentSale) {
    const soma = currentSale.reduce((acc, acvl) => acvl.price + acc, 0);
    return soma;
  }

  return (
    <ul className="segura-carrinho">
      {currentSale.length > 0 ? (
        currentSale.map((value) => (
          <li key={value.id}>
            <img src={value.img} alt={value.name}></img>
            <div className="carrinho-flex">
              <p>{value.name}</p>
              <p className="category">{value.category}</p>
            </div>

            <button
              onClick={() => {
                remove(value);
              }}
            >
              Remover
            </button>
          </li>
        ))
      ) : (
        <div className="car">
          <p className="name">Sua sacola esta vazia</p>
          <p className="category">adicione itens</p>
        </div>
      )}
      {currentSale.length > 0 ? (
        <div className="bar">
          <div className="total-flex">
            <p className="total">Total</p>{" "}
            <span className="cifrao">R${some(currentSale)},00</span>
          </div>

          <button
            onClick={() => {
              removeAll();
            }}
          >
            Remover todos
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </ul>
  );
}

export default ShoppingCart;
