import './ExampleButton.css';

const ExampleButton = props => {
  return (
    <button className="ExampleButton-btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ExampleButton;
