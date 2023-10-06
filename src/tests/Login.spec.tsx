import { screen } from '@testing-library/dom';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Página Login', () => {
  test('verifica se existe um input de email', () => {
    renderWithRouterAndRedux(<Login />);

    const emailIpt = screen.getByTestId('email-input');

    expect(emailIpt).toBeInTheDocument();
    expect(emailIpt).toBeVisible();
  });

  test('verifica se existe um input para a senha', () => {
    renderWithRouterAndRedux(<Login />);

    const passwordIpt = screen.getByTestId('password-input');

    expect(passwordIpt).toBeInTheDocument();
    expect(passwordIpt).toBeVisible();
  });

  test('verifica se existe o botão "Entrar"', () => {
    renderWithRouterAndRedux(<Login />);

    const btn = screen.getByText('Entrar');

    expect(btn).toBeInTheDocument();
    expect(btn).toBeVisible();
  });
});
