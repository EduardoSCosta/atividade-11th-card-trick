const CARD_SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];
const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const TOTAL_CARDS = 21;

const createDeck = () => {
  return CARD_SUITS.flatMap(suit => {
    return CARD_VALUES.map(value => ({ suit: suit, value: value }));
  });
}

const shuffleDeck = () => {
  return createDeck().sort(() => Math.random() - 0.5);
}

const cutDeck = () => {
  return shuffleDeck().slice(0, TOTAL_CARDS);
}

export default cutDeck;
