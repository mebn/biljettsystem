import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.to} className="flex justify-center flex-col">
      <button
        type="button"
        className="shrink bg-btnBG rounded-btn text-black font-medium py-3 px-8"
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
