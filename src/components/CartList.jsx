import ItemList from "./ItemList";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartList = () =>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()

    const handleclick = ()=>{
        console.log("button click")
        dispatch(removeItem())
    }


    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
           <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handleclick}>Clear Cart</button>
                 <ItemList items={cartItems}/>
            </div>
                

            
        </div>
    )
}

export default CartList;