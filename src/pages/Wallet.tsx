import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';

function Wallet() {
  return (
    <>
      <Header />
      <main>
        <WalletForm />
        <Table />
      </main>
    </>
  );
}

export default Wallet;
