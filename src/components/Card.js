import '../styles/components/_card.css';

function Card({suit, value}) {
  return (
    <div className={`card card--${suit}`}>{value} of {suit}</div>
  )
}

export default Card
