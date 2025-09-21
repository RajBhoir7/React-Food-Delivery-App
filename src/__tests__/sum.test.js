import { sum } from "../components/sum";


test("sum Function should calculate the sun of two numbers",()=>{
    const result = sum(3,4)
    // Assertion
    expect(result).toBe(7);
});