import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
    return(
    <div>
    <h1>About us</h1>
    <h3>This is Our Food Web</h3>
    <UserClass name={"Raj Class"} Location = {"Mumbai"} Contact={"Raj._.bhoir7"}/>
    </div>
    )
        
    }
}











// const Aboutus =  ()=>{
//     return(
//     <div>
//     <h1>About us</h1>
//     <h3>This is Our Food Web</h3>
//     {/* <User name={"Atharv Function"} Location = {"worli"} Contact = {"Atharv45"}/> */}
//     <UserClass name={"Raj Class"} Location = {"Mumbai"} Contact={"Raj._.bhoir7"}/>
//     </div>
//     )
// }

export default About;