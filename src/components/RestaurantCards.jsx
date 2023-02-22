import { IMG_CDN_URL } from "../config";

const RestaurantCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="cardImage" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{totalRatingsString} stars</h4>
    </div>
  );
};
export default RestaurantCards;
