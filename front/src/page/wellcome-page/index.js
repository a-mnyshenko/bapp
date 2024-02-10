import Heading from "../../component/heading";
import "./index.css";
import Safe from "./safe2.png";
import Button from "../../component/button";

export default function WellcomePage() {
  return (
    <div className="wellcome-page">
      <div className="page-background-img">
        <Heading header="Hello!" text="Welcome to bank app" isWhite={true} />
      </div>
      <img src={Safe} alt="safe" className="image" />
      <div className="field-button">
        <Button button="Sign up" className="" />
        <Button button="Sign in" className="white" />
      </div>
    </div>
  );
}
