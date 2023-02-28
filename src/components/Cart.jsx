import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import FoodItem from "./FoodItem"

const Cart = () => {
    const items = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const handleClear = () =>{
        dispatch(clearCart())
    }
  return (
    <div>
      <h1 className="font-bold text-3xl ml-5 m-2">Shopping Cart</h1>
      <button className="bg-red-600 rounded-md p-2 ml-3 text-white font-bold" onClick={()=>handleClear()}>Clear Cart</button>
      <div className="flex flex-wrap">{items.map((item) => <FoodItem key={item.id}  {...item}/>)}</div>
    </div>
  )
}

export default Cart
