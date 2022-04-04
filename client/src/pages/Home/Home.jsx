import { Link } from 'react-router-dom';

const MyBtn = props => {
  return (
    <div>
      <Link to={props.to}>
        <button className="bg-[#A9E3C0] text-[#0A1F44] text-[16px] px-10 py-3 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-lg">
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
      <div className="flex">
        <MyBtn to="/event/1" text="Event page (MVP)" />
        <MyBtn to="/event/1" text="Event page (Alpha)" />
      </div>
      <div className="flex">
        <MyBtn to="/event/1/book" text="Transaction page (MVP)" />  
        <MyBtn to="/event/1/purchase" text="Transaction page (Alpha)" />
      </div>
      <div className="flex">
        <MyBtn to="/purchase-complete/1" text="Purchase complete page (MVP)" />
        <MyBtn to="/purchase-complete-alpha/1" text="Purchase complete page (Alpha)" />
      </div>
    </div>
  );
}

export default Home;
