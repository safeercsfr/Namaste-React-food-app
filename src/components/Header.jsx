import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

// this is react element this is an object
const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-24 p-2"
      src="https://i.pinimg.com/originals/26/9a/93/269a93f45452b15422d7d52dd96a1881.jpg"
      alt="logo"
    />
  </a>
);

//this is react component this is function
// component composition or composing component
const Header = () => {
  const { user } = useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);
  const cartItem = useSelector(store => store.cart.items);
  console.log('j',cartItem);
  return (
    <div className="flex sticky top-0 justify-between bg-purple-900 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-9">
          <li className="px-4 font-bold text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-bold text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-white">
            <Link to="/cart">Cart <span className="px-1 m-2 bg-yellow-300 rounded-md text-black" data-testid="cart">{cartItem.length}</span> </Link>
          </li>
          <li className="px-4 font-bold text-white">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-2xl bg-red-700">{user.name}</h1>
        {isLogged ? (
          <button
            className="rounded-md p-2 mt-7 mr-10 w-24 bg-white"
            onClick={() => setIsLogged(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="rounded-md p-2 mt-7 mr-10 w-24 bg-white"
            onClick={() => setIsLogged(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;