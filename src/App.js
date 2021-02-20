import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [dieRollResult, setDieRollResult] = useState();
  const [coinFlipResult, setCoinFlipResult] = useState('Not Flipped Yet');

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    console.log(coinFlipResult);
  }, [coinFlipResult]);

  const rollDie = () => {
    setDieRollResult(getRandomInt(6) + 1);
  };

  const flipCoin = () => {
    setCoinFlipResult(getRandomInt(2));
  };

  return (
    <div className="App">
      <div>
        <div>{dieRollResult ? dieRollResult : 'Not Rolled Yet'}</div>
        <div>
          <button onClick={rollDie}>Roll Die</button>
        </div>
      </div>
      <div>{!!coinFlipResult ? 'Heads' : 'Tails'}</div>
      <div>
        <button onClick={flipCoin}>Flip Coin</button>
      </div>
    </div>
  );
}

export default App;
