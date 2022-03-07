import twentyOneCardsDeck from "../../utils/createTwentyOneCardsDeck";

describe('createTwentyOneCardsDeck', () => {
  describe('twentyOneCardsDeck()', () => {
    const deck =  twentyOneCardsDeck();

    it('returns a array of cards', () => {
      expect(typeof deck).toEqual('object');
    })

    it('returns a array with 21 cards', () => {
      expect(deck.length).toEqual(21);
    })
  })
})
