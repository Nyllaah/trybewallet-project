import { screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Verifica se a App funciona corretamente', () => {
  test('verifica se ao clicar no botão, a página é redirecionada para a rota /carteira', async () => {
    const { user } = renderWithRouterAndRedux(<App />);

    const button = screen.getByRole('button');
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');

    await user.type(email, 'teste@trybe.com');
    await user.type(password, '123456');
    await user.click(button);

    const header = await screen.findByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
