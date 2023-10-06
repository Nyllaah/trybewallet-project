import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const {
    user: { email }, wallet: { total },
  } = useSelector((state: GlobalStateType) => state);

  return (
    <header data-testid="header">
      <span data-testid="email-field">{`Email: ${email}`}</span>
      <span>Despesa total:</span>
      <span data-testid="total-field">{total}</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

export default Header;
