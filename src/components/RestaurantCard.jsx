import {CDN_URL} from "../utils/constants";



const RestaurantCard = (props) => {
    const {resdata} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating

    } = resdata?.info;
    return (
        <div className=" m-4 p-4 w-63 bg-gray-300 rounded-lg h-105">
            <img className="res-logo" alt="logo" src={CDN_URL+resdata.info.cloudinaryImageId}></img>

            <h3>{name}</h3>
            <h4 className="break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating}rating</h4>
            <h4>{costForTwo}</h4>
            
            
        </div>
    );
};


// Higher Order Component
// input - Resto Card ==> Restocard Promoted ==> Return new Component


export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-gray-200 text-black m-2 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; 