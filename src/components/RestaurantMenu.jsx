import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestauratCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {RestID} = useParams();
    const resInfo = useResturantMenu(RestID);
    const [showIndex,setshowIndex] = useState(0);

    if (resInfo == null) return <Shimmer/>;

    const {name,cuisines} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] 
        == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                cuisines : {cuisines.join("|")}
            </p>
            {/* categories Accordions */}
        
            {categories.map((category,index) => 
            <RestaurantCategory data={category?.card?.card} 
            key={category.card.card.categoryId} 
            showItems = {index == showIndex ? true : false}
            setShowIndex={()=> 
                setshowIndex(index)
            }
            />)}





        </div>   
    )
}














export default RestaurantMenu;

// <div>
        // <h1>{name}</h1>
        // <h3>cuisines : {cuisines.join("|")}</h3>
        // <h2>Menu</h2>   
        // <ul>
        //     {itemCards?.map((item) =>(
        //         <li key={item.card.info.id}>
        //             {item.card.info.name} - {"Rs."}
        //             {item.card.info.price/100 || item.card.info.defaultPrice/100}
        //         </li>
        //     ))}
        // </ul>
        // </div>