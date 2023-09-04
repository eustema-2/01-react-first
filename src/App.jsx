import { useState } from "react";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [numbersList, setNumbersList] = useState([1, 2]);

  function addNumber() {
    const number = getRndInteger(1, 100);
    setNumbersList([...numbersList, number]);
  }

  return (
    <div className="container">
      <h1>Genera numeri random</h1>
      <div className="top-bar">
        <button className="generate" onClick={addNumber}>
          GENERA
        </button>
        <div className="total-number">
          Totale numeri
          <div className="total">{numbersList.length}</div>
        </div>
      </div>
      <div className="numbers-list">
        {numbersList.map((number, index) => (
          <div className="number" key={index}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
