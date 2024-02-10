import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./index.css";

export default function Button({ button, className, onClick }) {
  return (
    <button disabled={isDisabled} className={`button button--${className}`}>
      {button}
    </button>
  );
}
