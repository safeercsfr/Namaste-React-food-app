import { SWIGGY_API } from "../config";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import {filterData} from '../utils/helper'
import useOnline from "../utils/useOnline";

const Body = () => {
  // let searchText = "KFC";
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // empty dependency array => once after render
  // dep array [searchText] => once after initial render + every time after render (my searchText changes)
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    // optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  
  const isOnline = useOnline()
  if(!isOnline) return <h1>No Internet Connection❗</h1>

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;
  // console.log("render");

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resList">
        {filteredRestaurants.map((res) => {
          return <Link to={"/restaurant/"+res.data.id} key={res.data.id} ><RestaurantCards {...res.data} /></Link>
        })}
      </div>
    </>
  );
};
export default Body;
