import { render,screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom";

describe("Contact us page Test Case",()=>{


test("should load contact us componet",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    // expect(heading).toBeInTheDocument();
})

test("There is A text Contact Us or not",()=>{
    render(<Contact/>);

    const text = screen.getByText("Contact Us")

    expect(text).toBeInTheDocument();
})

test("Two TextBoxes or Not",()=>{
    render(<Contact/>);
    const textboxes = screen.getAllByRole("textbox")

    // console.log(textboxes)

    expect(textboxes.length).toBe(2)
})


})
