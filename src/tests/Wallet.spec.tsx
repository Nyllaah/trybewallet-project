import { screen } from '@testing-library/dom';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Página da carteira', () => {
  test('verifica se existe o elemento header', () => {
    renderWithRouterAndRedux(<Wallet />);

    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
  });

  test('verifica se o formulário de cadastro de despesa é renderizado', () => {
    renderWithRouterAndRedux(<Wallet />);

    const walletForm = screen.getByTestId('wallet-form');

    expect(walletForm).toBeInTheDocument();
    expect(walletForm).toBeVisible();
  });
});
