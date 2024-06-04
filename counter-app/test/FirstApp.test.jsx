import { render } from 'react-testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test on FirstApp', () => {
  // test('should match snapshot', () => {
  //   const title = 'Im spiderman';
  //   const subTitle = 123;
  //   const { container } = render(<FirstApp title={title} subtitle={subTitle} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('should show title in h1', () => {
    const title = 'Im spiderman';
    const subTitle = 123;
    const { container, getAllByText, getByTestId } = render(<FirstApp title={title} subtitle={subTitle} />);

    expect(getAllByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);
    expect(getByTestId('title').innerHTML).toContain(title);
  })

});
