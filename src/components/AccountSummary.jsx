export default function AccountSummary({ balance, showMessage }) {
  return (
    <>
      <div>
        <h2>Account Summary</h2>
        <p>Current Balance: ${balance}</p>
        {showMessage && <p>Your account is active.</p>}
      </div>
    </>
  );
}
