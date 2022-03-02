import { Link } from 'react-router-dom';

const MyBtn = props => {
  return (
    <div>
      <Link to={props.to}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">
          {props.text}
        </button>
      </Link>
      <br />
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <MyBtn to="/event/1" text="Event page" />
      <MyBtn to="/event/1/book" text="Transaction page" />
      <MyBtn to="/purchase-complete" text="Purchase complete page" />
    </div>
  );
}

export default Home;
