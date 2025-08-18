import React, {useContext} from "react";
import { UserContext } from "./componentA";

function ComponentD(props){
    const user= useContext(UserContext);
return(<div className="box">
        <p>ComponentD </p>
        <h2>{`Bye ${user}`}</h2>
    </div>)
}
export default ComponentD