const TOTAL_ROWS = 3;

const filterDeckRows = (deck, remainder) => {
  return deck.filter((_, index) => index % TOTAL_ROWS === remainder);
}

export default filterDeckRows;
