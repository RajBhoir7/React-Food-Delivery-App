import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Aboutus from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartList from "./components/CartList";




const AppLayout = () => {
    const [userName,setuserName] = useState();

    useEffect(()=>{
        const data = {
            UserName : "RajBhoir7"
        };
        setuserName(data.UserName)
    },[])

    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
     <div className="app">
        <Header />
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
)}

const Grocery = lazy(()=> import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
    {
        path:"/",
        element:<Body/>
    },
    {
        path:"/about",
        element:<Aboutus/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/cart",
        element:<CartList/>
    },
     {
        path:"/grocery",
        element:(<Suspense fallback={<Shimmer/>} ><Grocery/></Suspense>)
    },
    {
        path:"RestaurantMenu/:RestID",
        element: <RestaurantMenu/>
    }
],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

