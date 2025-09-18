import { useEffect, useState } from "react"
import { MENU_API } from "./constants";


const useResturantMenu = (RestID)=>{

    const [resInfo,setresInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[])

    const  fetchMenu = async ()=>{
        const data = await fetch(MENU_API+RestID+ "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json.data)
    }
    return resInfo; 

}

export default useResturantMenu;