import reslistobj from "../utils/mockdata";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    // const [ListofResto,setListofResto] = useState(reslistobj);
    const [ListofResto, setListofResto] = useState([]);
    const [filterRestaurant, setfilterRestaurant] = useState([])
    const [searchText, setSearchText] = useState([""]);
    const { loggedInUser, setuserName } = useContext(UserContext);  

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(

            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        //   console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);  
        setListofResto(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // console.log(ListofResto);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false) {
        return (<div>
            <h3>Looks like you're offline...</h3>
        </div>)
    };
// if (ListofResto.length == 0)
     if (ListofResto.length == 0){
        return <Shimmer />
    }




    return (
        <div className="body">
            <div className="flex h-24 items-center">

                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const FilterListofResto = ListofResto.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setListofResto(FilterListofResto);
                            // console.log(ListofResto);
                        }
                        }>Top Rated Restaurant</button></div>


                <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                    const filterRestaurant = ListofResto.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilterRestaurant(filterRestaurant);
                }}>search</button>

                </div>

                <div className="m-4 p-4 flex items-center">
                    <label className="p-1">UserName:</label>
                    <input type="text" className="border border-black" value={loggedInUser} 
                    onChange={(e)=>{
                        setuserName(e.target.value)
                    }}
                    />
                </div>








            </div>
            <div className="flex flex-wrap justify-center">
                {filterRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/RestaurantMenu/" + restaurant.info.id}>

                        {restaurant.info.avgRating > 4.3 ? (
                            <RestaurantCardPromoted resdata={restaurant}/>
                        ) : (
                           <RestaurantCard resdata={restaurant} /> 
                        )
                    }
                        
                    </Link>

                ))}
            </div>
        </div>
    );
};


export default Body;