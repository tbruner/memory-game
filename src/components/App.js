import { useState } from 'react';
import '../styles/App.css';
import Cards from './Cards.js';
import Score from './Score.js';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState([
    {
      name: 'Crow',
      used: false
    },
    {
      name: 'Robin',
      used: false
    },
    {
      name: 'Wigeon',
      used: false
    },
    {
      name: 'Blue Jay',
      used: false
    },
    {
      name: 'Hawk',
      used: false
    },
    {
      name: 'Wren',
      used: false
    },
    {
      name: 'Woodpecker',
      used: false
    },
    {
      name: 'Cardinal',
      used: false
    },
    {
      name: 'Blackbird',
      used: false
    },
    {
      name: 'Nuthatch',
      used: false
    },
    {
      name: 'Warbler',
      used: false
    },
    {
      name: 'Dove',
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
