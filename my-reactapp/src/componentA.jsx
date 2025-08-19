import React, {useState, createContext} from "react";
import ComponentB from "./componentB";
export const UserContext=createContext();

function ComponentA(){
    const[user,setUser]=useState("yasmin");
    return(<div className="box">
        <p>ComponentA</p>
        <h2>{`Hi ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB user={user} />
            </UserContext.Provider>
        
       
    </div>)
};
export default ComponentA