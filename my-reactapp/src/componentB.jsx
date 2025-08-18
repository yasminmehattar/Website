import React, {useContext} from "react";
import { UserContext } from "./componentA";
import ComponentC from "./componentC";
function ComponentB(){
    const user=useContext(UserContext);
    return(<div className="box">
        <p>ComponentB</p>
        <h4>{`Hey ${user}`}</h4>
        <ComponentC />
    </div>)
}
export default ComponentB