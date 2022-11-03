import { useState } from 'react';
import '../styles/App.css';
import Cards from './Cards.js';
import Score from './Score.js';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState([
    {
      name: 'crow',
      used: false
    },
    {
      name: 'robin',
      used: false
    },
    {
      name: 'wigeon',
      used: false
    },
    {
      name: 'blueJay',
      used: false
    },
    {
      name: 'hawk',
      used: false
    },
    {
      name: 'wren',
      used: false
    },
    {
      name: 'woodpecker',
      used: false
    },
    {
      name: 'cardinal',
      used: false
    },
    {
      name: 'blackbird',
      used: false
    },
    {
      name: 'nuthatch',
      used: false
    },
    {
      name: 'warbler',
      used: false
    },
    {
      name: 'dove',
      used: false
    }
  ]);

  function updateGame(e) {

  }

  return (
    <div className="App">
      <header>
        <div className="title-card">
          <h1 className='title'>Birds Memory Game</h1>
          <p className='description'>Get points by clicking on an image, but don't click the same image twice!</p>
        </div>
        <Score
          score={score}
          best={best}
        />
      </header>
      <Cards
        updateGame={updateGame}
        cards={cards}
      />
    </div>
  );
}

export default App;
