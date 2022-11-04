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

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function updateGame(e) {
    let currentBirdIndex = null
    for(let i=0; i<cards.length; ++i) {
      if(e.currentTarget.value === cards[i].name) {
        currentBirdIndex = i
      }
    }
    
    const temp = [...cards]
    if(cards[currentBirdIndex].used) {
      setScore(0)
      for(let i=0; i<cards.length; ++i) {
        temp[i].used = false
      }
      setCards(temp)
    }
    else {
      const newScore = score + 1
      setScore(newScore)
      if(newScore > best) setBest(newScore)
      temp[currentBirdIndex].used = true
      setCards(temp)
    }

    setCards(shuffle(cards));
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
