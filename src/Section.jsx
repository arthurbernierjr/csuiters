import Card from "./Card";

export default function Section(props) {
  return (
    <div className="section">
      <h2>{props.heading}</h2>
      <section>
        {props.data.map((item) => {
          return <Card {...item} />;
        })}
      </section>
    </div>
  );
}
