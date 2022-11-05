import '../styles/Cards.css';
import crow from '../images/american-crow.jpg';
import robin from '../images/american-robin.jpg';
import wigeon from '../images/american-wigeon.jpg';
import blueJay from '../images/blue-jay.jpg';
import hawk from '../images/coopers-hawk.jpg';
import wren from '../images/carolina-wren.jpg';
import woodpecker from '../images/hairy-woodpecker.jpg';
import cardinal from '../images/northern-cardinal.jpg';
import blackbird from '../images/red-winged-blackbird.jpg';
import nuthatch from '../images/white-breasted-nuthatch.jpg';
import warbler from '../images/yellow-rumped-warbler.jpg';
import dove from '../images/mourning-dove.jpg';


function Cards({ cards, updateGame }) {
  function checkBird(bird) {
    if(bird.name === 'Crow') {
      return crow
    }
    else if(bird.name === 'Blue Jay') {
      return blueJay
    }
    else if(bird.name === 'Robin') {
      return robin
    }
    else if(bird.name === 'Wigeon') {
      return wigeon
    }
    else if(bird.name === 'Hawk') {
      return hawk
    }
    else if(bird.name === 'Wren') {
      return wren
    }
    else if(bird.name === 'Woodpecker') {
      return woodpecker
    }
    else if(bird.name === 'Cardinal') {
      return cardinal
    }
    else if(bird.name === 'Blackbird') {
      return blackbird
    }
    else if(bird.name === 'Nuthatch') {
      return nuthatch
    }     
    else if(bird.name === 'Warbler') {
      return warbler
    }
    else if(bird.name === 'Dove') {
      return dove
    }
  }

  return (
    <div className='cards'>
      {cards.map((bird, index) => (
        <button className='card' key={index} onClick={updateGame} value={bird.name}>
          <img src={checkBird(bird)} alt={bird.name} />
          <p className='card-title'>{bird.name}</p>
        </button>
      ))}
    </div>
  );
}

export default Cards;