import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./index.css";

export default function Button({ button, className, onClick }) {
  return (
    <button className={`button button--${className}`} onClick={onClick}>
      {button}
    </button>
  );
}
