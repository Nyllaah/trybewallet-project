import { useSelector } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { GlobalStateType } from '../types';

function Wallet() {
  const {
    user: { email }, wallet: { total },
  } = useSelector((state: GlobalStateType) => state);

  return (
    <>
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span>Despesa total:</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
      <main>
        <WalletForm />
      </main>
    </>
  );
}

export default Wallet;
