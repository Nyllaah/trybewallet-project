import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Table() {
  const { expenses } = useSelector((state: GlobalStateType) => state.wallet);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          const currencies = Object.values(expense.exchangeRates);
          const rate = currencies.find((curr) => curr.code === expense.currency);

          return (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{rate.name}</td>
              <td>{(+rate.ask).toFixed(2)}</td>
              <td>{(+expense.value * +rate.ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
