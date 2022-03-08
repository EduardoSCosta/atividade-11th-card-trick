import '../styles/components/_cardsRow.css'
import Card from './Card';

function CardsRow({ cards }) {
  return(
    <div className='cards-row'>
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
