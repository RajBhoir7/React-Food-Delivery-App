import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0);
    const [count2] = useState(1);

    const {name,Location,Contact} = props;
    return(
        <div className="user-card">
            <h2>count:{count}</h2>
            <h2>count:{count2}</h2>
            <h2>Name:{name}</h2>
            <h3>Location:{Location}</h3>
            <h4>Contact :{Contact}</h4>
        </div>
    )
}

export default User;