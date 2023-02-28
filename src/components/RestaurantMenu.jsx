import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch()

  const handleAdd =(item)=>{
    dispatch(addItem(item))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="bg-gray-300 flex flex-col p-8">
          <div className="flex">
            <img
              className="h-52"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt="image"
            />
            <h1 className="font-bold text-4xl ml-6">{restaurant?.name}</h1>
            <div className="mr-auto">
              <h3 className="mt-14 font-bold">{restaurant?.city}</h3>
              <h3 className="font-bold">{restaurant?.avgRatingString} stars</h3>
              <h3 className="font-bold">{restaurant?.costForTwoMsg}</h3>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl flex flex-wrap">Menu</h1>
          <h1>{console.log(Object.values(restaurant?.menu?.items))}</h1>
          <ul className="list-disc">
            {Object.values(restaurant?.menu?.items).map((item) => (
                <li key={item?.id}>{item?.name}<button onClick={()=>handleAdd(item)} className="ml-2 bg-green-400 rounded">Add</button></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
