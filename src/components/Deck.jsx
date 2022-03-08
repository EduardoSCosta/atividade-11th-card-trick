import { useEffect, useState } from 'react';
import CardsRow from './CardsRow';
import cutDeck from '../utils/createTwentyOneCardsDeck';
import filterDeckRows from '../utils/filterDeckRows';
import '../styles/components/_deck.css';

<<<<<<< HEAD
const trickDeck = cutDeck();
=======
const TOTAL_ROUNDS = 3;
>>>>>>> create a function to update the rows on user click, up to three times

function Deck() {

  const [deck, setDeck] = useState([...trickDeck]);
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [roundNumber, setRoundNumber] = useState(1);

  useEffect(()=> {
    setFirstRow(filterDeckRows(deck, 0));
    setSecondRow(filterDeckRows(deck, 1));
    setThirdRow(filterDeckRows(deck, 2));
  }, [deck])

  function nextRoundDeck(selectedRow) {
    if (roundNumber > TOTAL_ROUNDS) {
      return;
    }

    let mergedDeck = [];
    if(selectedRow === "firstRow") {
      mergedDeck = [...secondRow, ...firstRow, ...thirdRow];
    } else if (selectedRow === "secondRow") {
      mergedDeck = [...firstRow, ...secondRow, ...thirdRow];
    } else {
      mergedDeck = [...firstRow, ...thirdRow, ...secondRow];
    }
    setDeck(mergedDeck);
    setRoundNumber(roundNumber + 1);
  }

  return (
    <div className='deck'>
      <CardsRow cards={firstRow} selectRow={() => nextRoundDeck('firstRow')} buttonTitle='First Row'/>
      <CardsRow cards={secondRow} selectRow={() => nextRoundDeck('secondRow')} buttonTitle='Second Row'/>
      <CardsRow cards={thirdRow} selectRow={() => nextRoundDeck('thirdRow')} buttonTitle='Third Row'/>
    </div>
  );
}

export default Deck;
