import '../styles/components/_cardsRow.css'

function CardsRow({ cards }) {
  return(
    <div className='cards-row'>
      { cards.map(({ suit, value }, index) => {
        return (
          <div className={`card card--${suit}`} key={index}>{value} of {suit}</div>
          )
        })
      }
    </div>
  )
}

export default CardsRow;
