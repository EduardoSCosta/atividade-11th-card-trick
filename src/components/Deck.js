import { useState } from 'react';
import twentyOneCardsDeck from '../utils/createTwentyOneCardsDeck';

function Deck() {

  const [deck, setDeck] = useState(twentyOneCardsDeck());

  return (
    <div className='deck'>
      { deck.map(({suit, value}, index) => {
          return (
            <div className={`card card--${suit}`} key={index}>{value} of {suit}</div>
          )
        }) 
      }
    </div>
  );
}

export default Deck;
