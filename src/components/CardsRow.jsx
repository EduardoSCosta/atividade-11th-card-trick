import '../styles/components/_cardsRow.css'
import Card from './Card';

function CardsRow({ cards, row, selectCallback }) {

  return(
    <div className='cards-row'>
      <button type='button' className='button--select-row' onClick={() => selectCallback(row)}>
        {`${row} row`}
      </button>
      { cards.map(({ suit, value }) => {
        return (
          <Card suit={suit} value={value} key={`${value}-${suit}`}/>
          )
        })
      }
    </div>
  )
}

export default CardsRow;
