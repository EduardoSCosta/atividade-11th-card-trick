const reorderDeck = (selectedRow, firstRow, secondRow, thirdRow) => {

  if(selectedRow === 'first') {
    return [...secondRow, ...firstRow, ...thirdRow];
  } else if (selectedRow === 'second') {
    return [...firstRow, ...secondRow, ...thirdRow];
  } else {
    return [...firstRow, ...thirdRow, ...secondRow];
  }
}

export default reorderDeck;
