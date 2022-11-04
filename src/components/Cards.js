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
    if(bird.name === 'crow') {
      return crow
    }
    else if(bird.name === 'blueJay') {
      return blueJay
    }
    else if(bird.name === 'robin') {
      return robin
    }
    else if(bird.name === 'wigeon') {
      return wigeon
    }
    else if(bird.name === 'hawk') {
      return hawk
    }
    else if(bird.name === 'wren') {
      return wren
    }
    else if(bird.name === 'woodpecker') {
      return woodpecker
    }
    else if(bird.name === 'cardinal') {
      return cardinal
    }
    else if(bird.name === 'blackbird') {
      return blackbird
    }
    else if(bird.name === 'nuthatch') {
      return nuthatch
    }     
    else if(bird.name === 'warbler') {
      return warbler
    }
    else if(bird.name === 'dove') {
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