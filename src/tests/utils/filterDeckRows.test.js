import filterDeckRows from "../../utils/filterDeckRows";

describe('filterDeckRows', () => {
  describe('filterDeckRows()', () => {
    const deck =  [
                    {suit: 'hearts', value: '4'},
                    {suit: 'clubs', value: '3'},
                    {suit: 'spades', value: 'A'},
                    {suit: 'diamonds', value: 'Q'},
                    {suit: 'hearts', value: 'A'}
                  ];
    const remainder = 0;

    it('returns filtered cards', () => {
      expect(filterDeckRows(deck, remainder))
              .toEqual([{suit: 'hearts', value: '4'}, {suit: 'diamonds', value: 'Q'}]
            );
    })
  })
})
