import {fireEvent, render,screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("should Search Res List for Burger Input", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8)

    const searchBtn = screen.getByRole("button",{name:"search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"pizz"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);



})

it("should Filter Top Rated Resto", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8)

    const FilterBtn = screen.getByRole("button",{name:"Top Rated Restaurant"});
    fireEvent.click(FilterBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(7);



})