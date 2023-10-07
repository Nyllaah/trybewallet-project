import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ThunkDispatchType, GlobalStateType, ExpensesType } from '../types';
import { actionFetchCurrencies, saveExpenses, updateTotal } from '../redux/actions';
import { ExchangeRatesContent } from '../tests/helpers/mockData';

function WalletForm() {
  const dispatch: ThunkDispatchType = useDispatch();

  useEffect(() => {
    dispatch(actionFetchCurrencies());
  }, [dispatch]);

  const {
    currencies,
    expenses,
    rates,
    editor,
    idToEdit,
  } = useSelector((state: GlobalStateType) => state.wallet);

  const alimentacao = 'Alimentação';

  const [formData, setFormData] = useState<ExpensesType>({
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: alimentacao,
    exchangeRates: {} as ExchangeRatesContent,
  });

  useEffect(() => {
    if (editor) {
      setFormData({
        id: idToEdit,
        value: expenses[idToEdit].value,
        description: expenses[idToEdit].description,
        currency: expenses[idToEdit].currency,
        method: expenses[idToEdit].method,
        tag: expenses[idToEdit].tag,
        exchangeRates: expenses[idToEdit].exchangeRates,
      });
    }
  }, [editor, expenses, idToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    dispatch(actionFetchCurrencies());
    dispatch(saveExpenses({ ...formData, exchangeRates: rates }));
    dispatch(updateTotal());

    setFormData((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      exchangeRates: {} as ExchangeRatesContent,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(saveExpenses(formData));
    dispatch(updateTotal());

    setFormData((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      exchangeRates: {} as ExchangeRatesContent,
    }));
  };

  return (
    <form data-testid="wallet-form">
      <input
        type="text"
        data-testid="value-input"
        name="value"
        placeholder="Valor"
        value={ formData.value }
        onChange={ handleChange }
      />

      <input
        type="text"
        data-testid="description-input"
        name="description"
        placeholder="Descrição"
        value={ formData.description }
        onChange={ handleChange }
      />

      <select
        name="currency"
        id="currency-input"
        data-testid="currency-input"
        value={ formData.currency }
        onChange={ handleChange }
      >

        {currencies.map((currency) => (
          <option
            key={ currency }
            value={ currency }
            data-testid="currency-option"
          >
            {currency}

          </option>
        ))}

      </select>

      <select
        name="method"
        id="method-input"
        data-testid="method-input"
        value={ formData.method }
        onChange={ handleChange }
      >

        <option
          value="Dinheiro"
          data-testid="method-option"
        >
          Dinheiro

        </option>
        <option
          value="Cartão de crédito"
          data-testid="method-option"
        >
          Cartão de crédito

        </option>
        <option
          value="Cartão de débito"
          data-testid="method-option"
        >
          Cartão de débito

        </option>

      </select>

      <select
        name="tag"
        id="tag-input"
        data-testid="tag-input"
        value={ formData.tag }
        onChange={ handleChange }
      >

        <option value="Alimentação" data-testid="tag-option">Alimentação</option>
        <option value="Lazer" data-testid="tag-option">Lazer</option>
        <option value="Trabalho" data-testid="tag-option">Trabalho</option>
        <option value="Transporte" data-testid="tag-option">Transporte</option>
        <option value="Saúde" data-testid="tag-option">Saúde</option>

      </select>
      {editor
        ? <button type="button" onClick={ handleSaveChanges }>Editar despesa</button>
        : <button type="button" onClick={ handleClick }>Adicionar despesa</button>}
    </form>
  );
}

export default WalletForm;
