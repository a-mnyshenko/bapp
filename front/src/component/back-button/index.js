import "./index.css";
import Svg from "./back-button.svg";

export default function Component() {
  return (
    <div className="back-button">
      <img src={Svg} alt="backButton" />
    </div>
  );
}
