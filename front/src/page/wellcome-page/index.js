import Heading from "../../component/heading";
import "./index.css";
import Safe from "./safe2.png";
import Button from "../../component/button";
import { useNavigate } from "react-router-dom";

export default function WellcomePage() {
  const navigate = useNavigate();
  return (
    <div className="wellcome-page">
      <div className="page-background-img">
        <Heading header="Hello!" text="Welcome to bank app" isWhite={true} />
      </div>
      <img src={Safe} alt="safe" className="image" />
      <div className="field-button">
        <Button button="Sign up" className="" onClick={() => navigate('/signup')} />
        <Button button="Sign in" className="white" onClick={() => navigate('/signin')} />
      </div>
    </div>
  );
}
