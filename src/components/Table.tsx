import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from '../types';
import { editMode, updateExpenses, updateTotal } from '../redux/actions';

function Table() {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state: GlobalStateType) => state.wallet);

  const handleClick = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);

    dispatch(updateExpenses(newExpenses));
    dispatch(updateTotal());
  };

  const handleEditMode = (idToEdit: number) => {
    dispatch(editMode(idToEdit));
  };

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
          <th colSpan={ 2 }>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          const currencies = Object.values(expense.exchangeRates);
          const rate = currencies.find((curr) => curr.code === expense.currency);

          if (!rate) return <span>Lista vazia</span>;
          return (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{(+expense.value).toFixed(2)}</td>
              <td>{rate.name}</td>
              <td>{(+rate.ask).toFixed(2)}</td>
              <td>{(+expense.value * +rate.ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => handleEditMode(expense.id) }
                >
                  Editar

                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => handleClick(expense.id) }
                >
                  Excluir

                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
