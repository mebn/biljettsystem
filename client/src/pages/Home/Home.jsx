import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Home screen</h1>
      <Link to="/examplePage">example page</Link>
    </div>
  );
}

export default Home;
