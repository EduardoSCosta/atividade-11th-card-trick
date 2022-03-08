import { useState } from 'react';
import Card from './Card';
import cutDeck from '../utils/createTwentyOneCardsDeck';
import '../styles/components/_deck.css';

const trickDeck = cutDeck();

function Deck() {

  const [deck, setDeck] = useState(trickDeck);

  return (
    <div className='deck'>
      { deck.map(({suit, value}) => {
          return (
            <Card suit={suit} value={value} key={`${value}-${suit}`}/>
          )
        }) 
      }
    </div>
  );
}

export default Deck;
