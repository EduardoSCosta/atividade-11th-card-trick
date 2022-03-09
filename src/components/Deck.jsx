import { useEffect, useState } from 'react';
import CardsRow from './CardsRow';
import cutDeck from '../utils/createTwentyOneCardsDeck';
import filterDeckRows from '../utils/filterDeckRows';
import '../styles/components/_deck.css';

const trickDeck = cutDeck();

function Deck() {

  const [deck, setDeck] = useState([...trickDeck]);
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);

  useEffect(()=> {
    setFirstRow(filterDeckRows(deck, 0));
    setSecondRow(filterDeckRows(deck, 1));
    setThirdRow(filterDeckRows(deck, 2));
  }, [deck])

  return (
    <div className='deck'>
      <CardsRow cards={firstRow}/>
      <CardsRow cards={secondRow}/>
      <CardsRow cards={thirdRow}/>
    </div>
  );
}

export default Deck;
