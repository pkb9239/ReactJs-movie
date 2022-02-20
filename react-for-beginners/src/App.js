import { useState, useEffect } from "react";

function App() {
    const [loading, setLoding] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) =>  {
        setCoins(json);
        setLoding(false);
      });
    }, []);
    const onChange = (event) => setMoney(event.target.value); 
    return (
    <div>
        <h1>The Coins💰 {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading ...</strong>
        ) : (
          <div>
            <input
              onChange={onChange}
              value={money}
              type="number"
              placeholder="How much do you have ?"
            />
            <select>
                {coins.map((coin) => (
                  <option key={coin.id}>
                    {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD{" "}
                    {money / coin.quotes.USD.price}
                    {coin.symbol}
                  </option>
                ))}
            </select>
          </div>
        )}
    </div>
  );
}

export default App;
