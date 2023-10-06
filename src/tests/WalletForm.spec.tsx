import { screen } from '@testing-library/dom';
import WalletForm from '../components/WalletForm';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Componente WalletForm', () => {
  test('verifica se existe o input do valor da despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valueIpt = screen.getByTestId('value-input');

    expect(valueIpt).toBeInTheDocument();
    expect(valueIpt).toBeVisible();
  });

  test('verifica se existe o input da descrição da despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const descriptionIpt = screen.getByTestId('description-input');

    expect(descriptionIpt).toBeInTheDocument();
    expect(descriptionIpt).toBeVisible();
  });

  test('verifica se existe o elemento select da moeda da despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const currencyIpt = screen.getByTestId('currency-input');

    expect(currencyIpt).toBeInTheDocument();
    expect(currencyIpt).toBeVisible();
  });

  test('verifica se o elemento select da moeda da despesa exibe 15 opções', async () => {
    renderWithRouterAndRedux(<WalletForm />);

    const currencyOpts = await screen.findAllByTestId('currency-option');

    expect(currencyOpts).toHaveLength(15);
  });

  test('verifica se existe o elemento select com os método da despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const methodIpt = screen.getByTestId('method-input');
    const methodOpts = screen.getAllByTestId('method-option');

    expect(methodIpt).toBeInTheDocument();
    expect(methodIpt).toBeVisible();
    expect(methodOpts).toHaveLength(3);
  });

  test('verifica se existe o elemento select com as tags da despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const tagIpt = screen.getByTestId('tag-input');
    const tagOpts = screen.getAllByTestId('tag-option');

    expect(tagIpt).toBeInTheDocument();
    expect(tagIpt).toBeVisible();
    expect(tagOpts).toHaveLength(5);
  });

  test('verifica se existe o botão para adicionar a despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const btn = screen.getByText('Adicionar despesa');

    expect(btn).toBeInTheDocument();
    expect(btn).toBeVisible();
  });
});
