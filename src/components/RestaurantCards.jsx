import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
}) => {
  const {user} = useContext(UserContext)
  return (
    <div className="w-[267px] p-3 bg-gray-200 m-6 ml-3 rounded-md h-[21rem] justify-center">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="cardImage" />
      <h2 className="text-lg font-bold whitespace-normal">{name}</h2>
      <h3 className="truncate ">{cuisines.join(",")}</h3>
      <h4 className="whitespace-normal">{totalRatingsString} stars</h4>
      <h4 className="whitespace-normal font-bold text-blue-700">{user.name}</h4>
      <h4 className="whitespace-normal font-bold text-blue-700">{user.email}</h4>
    </div>
  );
};
export default RestaurantCards;
