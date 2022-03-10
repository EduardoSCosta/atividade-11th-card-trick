import { render, screen } from '@testing-library/react';
import CardsRow from '../../components/CardsRow';

describe('<CardsRow />', () => {
  const cards = [{suit: 'spades', value: 'A'}, {suit: 'hearts', value: '2'}];
  const buttonTitle = "Test Button";
  
  it('should render a button with the text passed in the props', () => {
    render(<CardsRow cards={cards} buttonTitle={buttonTitle}/>);
    const buttonElement = screen.getByRole('button', {name: buttonTitle});

    expect(buttonElement).toBeInTheDocument();
  })

  it('should render all cards passed in the props', () => {
    render(<CardsRow cards={cards} buttonTitle={buttonTitle}/>);
    const cardElements = screen.getAllByText(/ of /i);

    expect(cardElements).toHaveLength(2);
  })
})
