import React from "react"
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_info:{
                name:"dummy",
                location:"India",
            }
        };
    }

    async componentDidMount(){
        const data = await fetch("  https://api.github.com/users/rajbhoir7");
        const json = await data.json();
        
        this.setState({
            user_info:json
        })
    }
    
    
    render() {
        const {name,location,bio,avatar_url} = this.state.user_info;
        
        return (
            <div className="user-card">
           <div className="img-container">
            <UserContext.Consumer>
                {({loggedInUser})=>(
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>

            <img className="avatar" src={avatar_url} alt="" /></div>
             <h2>Name:{name}</h2>
            <p>Location:{location}</p>
            <h3>{bio}</h3>
           
        </div>
        





        )
    }
}

export default UserClass;