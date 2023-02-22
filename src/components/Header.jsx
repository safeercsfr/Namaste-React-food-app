import { useState } from "react";
import { Link } from "react-router-dom";


// this is react element this is an object
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://i.pinimg.com/originals/26/9a/93/269a93f45452b15422d7d52dd96a1881.jpg"
      alt="logo"
    />
  </a>
);

//this is react component this is function
// component composition or composing component
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/instamart">Cart</Link></li>
        </ul>
      </div>
      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
