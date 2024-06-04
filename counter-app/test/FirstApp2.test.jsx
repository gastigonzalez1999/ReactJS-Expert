import { render, screen } from 'react-testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test on FirstApp', () => {
  const title = 'Im spiderman';
  const subTitle = 123;
  test('should match snapshot', () => {
    const { container } = render(<FirstApp title={title} subtitle={subTitle} />);

    expect(container).toMatchSnapshot();
  });

  test('should show title in h1', () => {
    render(<FirstApp title={title} subtitle={subTitle} />);

    expect(screen.getByText(title)).toBeTruthy();
    //screen.debug();

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('should return subtitle amount', () => {
    render(<FirstApp title={title} subtitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(1);
  });

});
