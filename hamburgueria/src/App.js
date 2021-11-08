import "./App.css";
import { useState } from "react";
import MenuContainer from "../src/components/MenuContainer";
import Input from "./components/Input";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 7,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: 10,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [userInput, setUserInput] = useState("");

  function showProducts(id) {
    const filter = products.filter((value) => value.category === id);
    setFilteredProducts(filter);
  }

  function handleClick(productId) {
    const found = products.find((product) => product.id === productId);
    const find = currentSale.find((product) => product.id === productId);
    if (find === undefined) {
      setCurrentSale([...currentSale, found]);
    }
  }

  return (
    <main className="App">
      <header className="cabeçalho">
        <h1>
          <strong>Burguer</strong> Kenzie
        </h1>
        <div>
          <Input
            showProducts={showProducts}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        </div>
      </header>
      <section className="paiDeTodos">
        <MenuContainer
          products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
        />
        <div>
          <h1>Carrinho de compras</h1>
          <div>
            <ShoppingCart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
