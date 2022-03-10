import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Deck from '../../components/Deck';

describe('<Deck />', () =>{
  it('should not render the "Play again" button before three rounds', () => {
    render(<Deck />);
    const playAgainButtonElement = screen.queryByRole('button', {name: 'Play again'});

    expect(playAgainButtonElement).toBeNull();
  })

  it('should render the "Play again" button after three rounds', () => {
    render(<Deck />);
    userEvent.click(screen.getByRole('button', {name: "First Row"}))
    userEvent.click(screen.getByRole('button', {name: "Second Row"}))
    userEvent.click(screen.getByRole('button', {name: "Third Row"}))
    const playAgainButtonElement = screen.queryByRole('button', {name: 'Play again'});

    expect(playAgainButtonElement).toBeInTheDocument();
  })

  it('should not render the card rows after three rounds', () => {
    render(<Deck />);
    userEvent.click(screen.getByRole('button', {name: "First Row"}))
    userEvent.click(screen.getByRole('button', {name: "Second Row"}))
    userEvent.click(screen.getByRole('button', {name: "Third Row"}))
    const cardsRowsElements = screen.queryByRole('button', {name: / Row/});

    expect(cardsRowsElements).toBeNull();
  })
})
