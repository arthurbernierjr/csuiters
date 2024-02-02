export default function Card(props) {
  return (
    <div className="card">
      <img src="./7.png" alt="Avatar" style={{ width: "100%" }} />
      <header>{props.heading}</header>
      <div>{props.children}</div>
      <footer>{props.footer}</footer>
    </div>
  );
}
