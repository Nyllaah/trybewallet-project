import { screen } from '@testing-library/dom';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';

describe('Componente Header', () => {
  test('verifica de existe um elemento de texto com com testId "email-field"', () => {
    renderWithRouterAndRedux(<Header />);

    const emailField = screen.getByTestId('email-field');

    expect(emailField).toBeInTheDocument();
    expect(emailField).toBeVisible();
  });

  test('verifica de existe um elemento de texto com com testId "total-field"', () => {
    renderWithRouterAndRedux(<Header />);

    const totalField = screen.getByTestId('total-field');

    expect(totalField).toBeInTheDocument();
    expect(totalField).toBeVisible();
  });

  test('verifica de existe um elemento de texto com com testId "header-currency-field"', () => {
    renderWithRouterAndRedux(<Header />);

    const currencyField = screen.getByTestId('header-currency-field');

    expect(currencyField).toBeInTheDocument();
    expect(currencyField).toBeVisible();
  });
});
