function Input({ showProducts, userInput, setUserInput }) {
  return (
    <form
      type="text"
      value={userInput}
      className="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        onChange={(event) => setUserInput(event.target.value)}
        placeholder="Digitar Pesquisa"
      />
      <button
        onClick={() => {
          showProducts(userInput);
        }}
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Input;
