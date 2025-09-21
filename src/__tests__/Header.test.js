import { fireEvent, render ,screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";


describe("Header test Cases",()=>{


it("Should Render Header Component with a login button",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>    
            <Header/>
        </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument();
});

it("should render Header Component with a Cart Items 0",() =>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
    const cartItems = screen.getByText("Cart(0items)")
    expect(cartItems).toBeInTheDocument();
});

it("Should Change Login Button to Logout on Click",()=>{
     render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>)

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    console.log(logoutButton)
    expect(logoutButton).toBeInTheDocument();
    
})




})

