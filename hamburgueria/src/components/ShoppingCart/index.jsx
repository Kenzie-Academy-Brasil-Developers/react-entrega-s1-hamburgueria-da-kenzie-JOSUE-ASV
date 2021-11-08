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
    <ul>
      {currentSale.map((value) => (
        <li key={value.id}>
          <img src={value.img} alt={value.name}></img>
          <p>{value.name}</p>
          <p>{value.category}</p>
          <button
            onClick={() => {
              remove(value);
            }}
          >
            X
          </button>
        </li>
      ))}
      <button
        onClick={() => {
          removeAll();
        }}
      >
        Remover todos
      </button>
      <span>total {some(currentSale)}</span>
    </ul>
  );
}

export default ShoppingCart;
