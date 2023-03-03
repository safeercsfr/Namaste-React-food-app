import { IMG_CDN_URL } from "../config";

const FoodItem = ({
  cloudinaryImageId,
  name,
  description,
  price,
  category,
}) => {
  return (
    <div className="w-[267px] p-3 bg-gray-200 m-6 ml-3 rounded-md h-[21rem] justify-center">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="cardImage" />
      <h2 className="text-lg font-bold whitespace-normal">{name}</h2>
      <h3 className="truncate ">{description}</h3>
      <h3 className="truncate ">category:{category}</h3>
      <h4 className="whitespace-normal">Price: {price/100}</h4>
    </div>
  );
};
export default FoodItem;
