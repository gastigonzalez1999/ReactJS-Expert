import { render, screen, fireEvent } from 'react-testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Test on CounterApp', () => {
  const value = 10;
  test('should match snapshot', () => {
    const { container } = render(<CounterApp value = {value} />);

    expect(container).toMatchSnapshot();
  });

  test('should show value amount as 10', () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();
    //screen.debug();

    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(value);
  });

  test('should increment +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('should reset', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('reset'));
    expect(screen.getByText('10')).toBeTruthy();
  });

});