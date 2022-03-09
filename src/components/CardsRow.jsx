import '../styles/components/_cardsRow.css'
import Card from './Card';

function CardsRow({ cards, selectRow, buttonTitle }) {
  return(
    <div className='cards-row'>
      <button type='button' className='button--select-row' onClick={selectRow}>
        {buttonTitle}
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
