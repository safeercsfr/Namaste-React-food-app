import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId)
  
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
    <div className="menu">
      <div> 
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="image" />
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRatingString} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <h1>{console.log(Object.values(restaurant?.menu?.items))}</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
