import { useState } from 'react';
import './index.css'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Button from './Button/button.jsx'
import Detail from './Details.jsx'
import Usergreetings from './usergreetings.jsx'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);     // assume user is logged in initially
  const [showPrompt, setShowPrompt] = useState(false);    // no message shown at first

  const handleClick = () => {
    setShowPrompt(true);        // now we should show the prompt
  };
   return(
    <>
      <Header/>
            {!showPrompt && (
              <>
      <Food/>
      <Card/>
      <Detail name="Yasmin" age={25} ITDepartment={true}/>
      {/* <Detail/> */}
      <Button onClick={handleClick} />
      {/* <Usergreetings isloggedin={isLoggedIn} username="Yasmin"/> */}
      {/* <Footer/> */}
      
   
    </>
            )}
      {showPrompt && <Usergreetings isloggedin={isLoggedIn} username="Yasmin" />}
        <Footer />
         </>
  )
  
  
}

export default App
