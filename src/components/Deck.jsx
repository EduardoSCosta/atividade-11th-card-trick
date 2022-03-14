import { useEffect, useState } from 'react';
import CardsRow from './CardsRow';
import cutDeck from '../utils/createTwentyOneCardsDeck';
import filterDeckRows from '../utils/filterDeckRows';
import '../styles/components/_deck.css';
import reorderDeck from '../utils/reorderDeck';
import EndScreen from './EndScreen';

const trickDeck = cutDeck();
const TOTAL_ROUNDS = 3;
const CHOSEN_CARD = 10;

function Deck() {

  const [deck, setDeck] = useState([...trickDeck]);
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [roundNumber, setRoundNumber] = useState(1);
  
  const isGameOver = roundNumber > TOTAL_ROUNDS;

  useEffect(()=> {
    setFirstRow(filterDeckRows(deck, 0));
    setSecondRow(filterDeckRows(deck, 1));
    setThirdRow(filterDeckRows(deck, 2));
  }, [deck])

  function nextRoundDeck(selectedRow) {
    if (TOTAL_ROUNDS >= roundNumber) {
      const reorderedDeck = reorderDeck(selectedRow, firstRow, secondRow, thirdRow);

      setDeck(reorderedDeck);
      setRoundNumber(roundNumber + 1);
    }
  }

  function restartGame() {
    setDeck(cutDeck());
    setRoundNumber(1);
  }


  return (
    <div className='deck'>
      {(isGameOver) ?
        <EndScreen card={deck[CHOSEN_CARD]} restartGame={restartGame}/>
      :
        <>
          <CardsRow cards={firstRow} row='first' selectCallback={nextRoundDeck} />
          <CardsRow cards={secondRow} row='second' selectCallback={nextRoundDeck} />
          <CardsRow cards={thirdRow} row='third' selectCallback={nextRoundDeck} />
        </>
      }
    </div>
  );
}

export default Deck;
