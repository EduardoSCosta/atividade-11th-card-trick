import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('<App />', () => {
  it('should render the title of the page', () => {
    render(<App />);
    const h1Element = screen.getByRole('heading', {name: '11Th Card Trick'});

    expect(h1Element).toBeInTheDocument();
  })
})
