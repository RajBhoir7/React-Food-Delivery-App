import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../components/RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../utils/appStore";
import Header from "../components/Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

import CartList from "../components/CartList"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})



it("should Load Restaurant Menu Component", async () => {
    await act(async () =>{
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        <RestaurantMenu/>
        <CartList/>
        </Provider>
        </BrowserRouter>)
    })
    
    const accordionHeader = screen.getByText("Veg(18)");
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(18)
    expect(screen.getByText("Cart(0items)")).toBeInTheDocument();
    
    const addBtns = screen.getAllByRole("button",{name:"Add+"});

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart(1items)"))

    fireEvent.click(addBtns[2]);
    expect(screen.getByText("Cart(2items)"))

    expect(screen.getAllByTestId("foodItems").length).toBe(20)
    
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))//Claer Cart Only removes one ele
    expect(screen.getAllByTestId("foodItems").length).toBe(19)




})
