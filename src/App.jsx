import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AccountSummary from "./components/AccountSummary";
import AccountControls from "./components/AccountControls";

function App() {
  const accountName = "Oliver's Bank Account";
  const subtitle = "Welcome to your bank account, Oliver";
  const [balance, setBalance] = useState(100);
  const [showMessage, setShowMessage] = useState(false);

  function depositMoney(amount) {
    // setBalance(balance + 10);
    setBalance((prevBalance) => prevBalance + amount);
  }

  function withdrwayMoney(amount) {
    // setBalance(balance - 10);
    setBalance((prevBalance) => prevBalance - amount);
  }

  function toggleMessage() {
    setShowMessage((prevShowMessage) => !prevShowMessage);
  }

  return (
    <>
      <Header accountName={accountName} subtitle={subtitle} />
      <AccountSummary balance={balance} showMessage={showMessage} />
      <AccountControls
        depositMoney={depositMoney}
        withdrayMoney={withdrwayMoney}
        toggleMessage={toggleMessage}
      />
    </>
  );
}

export default App;
