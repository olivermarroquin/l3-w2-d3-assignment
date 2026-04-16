import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AccountSummary from "./components/AccountSummary";
import AccountControls from "./components/AccountControls";

function App() {
  const accountName = "Oliver's Bank Account";
  const subtitle = "Welcome to your bank account, Oliver";
  const [balance, setBalance] = useState(100);

  function depositMoney(amount) {
    // setBalance(balance + 10);
    setBalance((prevBalance) => prevBalance + amount);
  }

  function withdrwayMoney(amount) {
    // setBalance(balance - 10);
    setBalance((prevBalance) => prevBalance - amount);
  }

  return (
    <>
      <Header accountName={accountName} subtitle={subtitle} />
      <AccountSummary balance={balance} />
      <AccountControls
        depositMoney={depositMoney}
        withdrayMoney={withdrwayMoney}
      />
    </>
  );
}

export default App;
