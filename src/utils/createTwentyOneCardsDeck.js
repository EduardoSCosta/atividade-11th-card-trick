const CARD_SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];
const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const TOTAL_CARDS = 21;

const createDeck = () => {
  const deck = [];
  CARD_SUITS.forEach(suit => {
    CARD_VALUES.forEach(value => {
      deck.push({ suit: suit, value: value });
    });
  });
  return deck;
}

const shuffleDeck = () => {
  return createDeck().sort(() => Math.random() - 0.5);
}

const twentyOneCardsDeck = () => {
  return shuffleDeck().slice(0, TOTAL_CARDS);
}

export default twentyOneCardsDeck;
