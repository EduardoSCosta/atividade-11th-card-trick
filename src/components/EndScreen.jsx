import Card from './Card';

function EndScreen({card, restartGame}) {
  return (
    <>
      <button type='button' className='button--play-again' onClick={restartGame}>Play again</button>
      <Card suit={card.suit} value={card.value} />
    </>
  )
}

export default EndScreen;
