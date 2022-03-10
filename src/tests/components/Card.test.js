import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

describe('<Card />', () => {
  it('should render a card with "value" of "suit" as text', () => {
    const card = {suit: 'spades', value: 'A'};

    render(<Card suit={card.suit} value={card.value}/>);

    const divElement = screen.getByText(`${card.value} of ${card.suit}`);

    expect(divElement).toBeInTheDocument();
  })
})
