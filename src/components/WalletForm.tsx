import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatchType, GlobalStateType, ExpensesType } from "../types";
import { actionFetchCurrencies, saveExpenses } from "../redux/actions";
import { useEffect, useState } from "react";

function WalletForm() {
  const dispatch: ThunkDispatchType = useDispatch();

  useEffect(() => {
    dispatch(actionFetchCurrencies());
  }, []);

  const { currencies, rates } = useSelector((state: GlobalStateType) => state.wallet);

  const [formData, setFormData] = useState<ExpensesType>({
    id: 0,
    value: 0.00,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: rates,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleClick = () => {
    dispatch(actionFetchCurrencies());

    dispatch(saveExpenses(formData, Number(formData.value)));
    setFormData((prevState) => ({
      id: prevState.id + 1,
      value: 0.00,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    }));
  };

  return (
    <form>
      <input
        type="number"
        data-testid="value-input"
        name="value"
        placeholder="Valor"
        value={formData.value}
        onChange={handleChange} />

      <input
        type="text"
        data-testid="description-input"
        name="description"
        placeholder="Descrição"
        value={formData.description}
        onChange={handleChange} />

      <select
        name="currency"
        id="currency-input"
        data-testid="currency-input"
        value={formData.currency}
        onChange={handleChange}>

        {currencies.map((currency) => currency !== 'USDT'
          && <option key={currency} value={currency}>{currency}</option>)}

      </select>

      <select
        name="method"
        id="method-input"
        data-testid="method-input"
        value={formData.method}
        onChange={handleChange}>

        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>

      </select>

      <select
        name="tag"
        id="tag-input"
        data-testid="tag-input"
        value={formData.tag}
        onChange={handleChange}>

        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>

      </select>

      <button type="button" onClick={handleClick}>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
