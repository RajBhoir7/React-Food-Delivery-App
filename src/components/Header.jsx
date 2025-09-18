import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    const [LoginBtn,setLoginBtn] = useState("Login")
    const cartItems = useSelector((store)=>store.cart.items)

    // console.log(cartItems[0].card.info.name)
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg h-20">
            <div className="logo-container">
                <img className="w-25" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart"> Cart({cartItems.length}items)</Link></li>
                    <li className="px-4">
                        <button className="login-btn" onClick={()=>{
                            LoginBtn == "Login" ? setLoginBtn("Logout") 
                            : setLoginBtn("Login"); 
                            
                        }
                        }>{LoginBtn}</button>
                    </li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};


export default Header;