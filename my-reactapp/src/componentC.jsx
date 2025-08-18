import React, {useContext} from "react";
import { UserContext } from "./componentA";
import ComponentD from "./componentD";
function ComponentC(){
    const user=useContext(UserContext);
    return(<div className="box">
        <p>ComponentC</p>
        <h3>{`Hello ${user} again`}</h3>
        <ComponentD />
    </div>)
}
export default ComponentC