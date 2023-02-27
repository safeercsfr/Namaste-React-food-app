import { useState } from "react";
import { Link } from "react-router-dom";


// this is react element this is an object
const Title = () => (
  <a href="/">
    <img
      className="h-24 p-2"
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
    <div className="flex justify-between bg-purple-900 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-9">
          <li className="px-4 font-bold text-white"><Link to="/">Home</Link></li>
          <li className="px-4 font-bold text-white"><Link to="/about">About</Link></li>
          <li className="px-4 font-bold text-white"><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-bold text-white"><Link to="/instamart">Cart</Link></li>
        </ul>
      </div>
      <div>
      {isLogged ? (
        <button className="rounded-md p-2 mt-7 mr-10 w-24 bg-white" onClick={() => setIsLogged(false)}>Logout</button>
      ) : (
        <button className="rounded-md p-2 mt-7 mr-10 w-24 bg-white" onClick={() => setIsLogged(true)}>Login</button>
      )}
      </div>
    </div>
  );
};

export default Header;
