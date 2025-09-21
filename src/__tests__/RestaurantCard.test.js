import { render,screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
describe("restocard test cases",()=>{


it("should Render Restaurant Components with Props Data",()=>{
    console.log(MOCK_DATA)
    render(<RestaurantCard resdata={MOCK_DATA} /> )
    const name = screen.getByText("PVR Cafe")
    expect(name).toBeInTheDocument();
})

})

