export default function Header({ accountName, subtitle }) {
  return (
    <>
      <h1>{accountName}</h1>
      <p>{subtitle}</p>
    </>
  );
}
