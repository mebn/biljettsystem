import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Home screen</h1>
      <div className="page-content">
        <Link to="/example-page"><button className="btn-1">example page</button></Link>
        <Link to="/api-testing"><button className='btn-2'>API Testing</button></Link>
        
        <Link to="/event/1"><button className=''>Event page</button></Link>
        <Link to="/event/1/book"><button className=''>Transaction page</button></Link>
        <Link to="/purchase-complete"><button className=''>Purchase complete page</button></Link>
      </div>
    </div>
  );
}

export default Home;
