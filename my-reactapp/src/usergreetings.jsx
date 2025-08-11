// function Usergreetings(props){

import { func } from "prop-types"

//         if(props.isloggedin){
//             return<h2>Welcome{props.username}</h2>
//         }
//         else{
//             return<h2>Please continue to login</h2>
//         }

    
// }

// function Usergreetings(props){
//     return(props.isloggedin? <h2>welcome{props.username}</h2>: 
//                              <h2>Please continue to login</h2>
    
//     )
// }

function Usergreetings(props){
    const WelcomePrompt= <h2 className="Welcomeprompt">Welcome{props.username}</h2>
    const loginprompt=<h2 className="Loginprompt">Please Continue to login</h2>
    return(
props.isloggedin? WelcomePrompt:loginprompt
    )
}
export default Usergreetings