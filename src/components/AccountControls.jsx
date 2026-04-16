export default function AccountControls({ depositMoney, withdrayMoney }) {
  return (
    <>
      <div className="card">
        <h2>Account Controls</h2>
        <button onClick={() => depositMoney(10)}>Deposit $10</button>
        <button onClick={() => withdrayMoney(10)}>Withdraw $10</button>
      </div>
    </>
  );
}
