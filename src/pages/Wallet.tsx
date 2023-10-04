import { useState } from "react";
import { useSelector } from "react-redux";

function Wallet() {
  const { email } = useSelector((state: { user: { email: string } }) => state.user);
  const [total, setTotal] = useState(0);

  return (
    <>
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">{`Despesa total: ${total}`}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    </>
  );
}

export default Wallet;
