import './Navbar.css';
import { Link } from 'react-router-dom';
// import photo1 from './peacock.jpg';

const Navbar = () => {
  return (
    <div className="header">
      <div className="title">
        <img src="./src/assets/peacock.jpg" alt="Phone Icon" />
        <h1>Sprint Plans</h1>
      </div>
      <div className="nav">
        <Link to="/">Overview</Link>
        <Link to="/Project">List</Link>
        <Link to="/Tracker" className="active">Board</Link>
        <Link to="/Timeline">Timeline</Link>
        <Link to="/Calendar">Calendar</Link>
        <Link to="#">Dashboard</Link>
        <Link to="#">Messages</Link>
        <Link to="#">More...</Link>
      </div>
      <div className="profile">
        <img src="profile1.png" alt="Profile 1" />
        <img src="profile2.png" alt="Profile 2" />
        <img src="profile3.png" alt="Profile 3" />
        <img src="profile4.png" alt="Profile 4" />
        <input type="search" placeholder="Search" />
        <button className="add">+</button>
      </div>
    </div>
  );
};

export default Navbar;
