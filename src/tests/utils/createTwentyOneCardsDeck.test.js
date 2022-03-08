import cutDeck, { TOTAL_CARDS } from "../../utils/createTwentyOneCardsDeck";

describe('createTwentyOneCardsDeck', () => {
  describe('cutDeck()', () => {
    const CARD_SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];
    const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const fullDeck = CARD_SUITS.flatMap(suit => {
      return CARD_VALUES.map(value => ({ suit: suit, value: value }));
    });
    
    const trickDeck = cutDeck();
    const validDeck = trickDeck.every(trickCard => fullDeck
                                .some(fullCard => fullCard.suit === trickCard.suit && fullCard.value === trickCard.value))

    it('returns an array with valid cards', () => {
      expect(validDeck).toEqual(true);
    })

    it('returns an ideal amount of cards', () => {
      expect(trickDeck.length).toEqual(TOTAL_CARDS);
    })
  })
})
