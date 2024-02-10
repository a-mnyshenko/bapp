import "./index.css";

export default function Heading({ header, text, isWhite }) {
  return (
    <div className="heading heading--white">
      <h1 className="header">{header}</h1>
      <p className="text">{text}</p>
    </div>
  );
}
