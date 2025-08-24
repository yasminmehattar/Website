import { useState } from 'react';
import './index.css'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Button from './Button/button.jsx'
import Detail from './Details.jsx'
import Usergreetings from './usergreetings.jsx'
import List from './list.jsx';
import Buton from './btn.jsx';
import Profile from './profile.jsx';
import Mycomponent from './mycomponent.jsx';
import Counter from './counter.jsx';
import Mycomp from './onchangeeventhandler.jsx';
import Colorpicker from './colorpicker.jsx';
import Updatefunction from './updaterfunctions.jsx';
import UpdateObject from './updateobjectsinstate.jsx';
import Updatearray from './Updatearrayinstate.jsx';
import Mycar from './ArrayObject.jsx';
import ToDolist from './Todolist.jsx';
import Useeffected from './useeffect.jsx';
import Digitalclock from './Digitalclock.jsx';
import ComponentA from './componentA.jsx';
import Current from './useref.jsx';
import Apps from './shortcut.jsx';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);     // assume user is logged in initially
  const [showPrompt, setShowPrompt] = useState(false);    // no message shown at first

  const handleClick = () => {
    setShowPrompt(true);        // now we should show the prompt
  };

   const Fruits=[{id:1 ,name:"apple", calories:95},
                    {id:2,name:"orange",calories:85},
                    {id:3,name:"banana",calories:75},
                    {id:4,name:"pineapple",calories:65},
                    {id:5,name:"guava",calories:55}]
   const Vegetables=[{id:6 ,name:"aple", calories:95},
                    {id:7,name:"orage",calories:85},
                    {id:8,name:"banaa",calories:75},
                    {id:9,name:"pinepple",calories:65},
                    {id:10,name:"gava",calories:55}]                 
   return(
    <>
      <Header/>
      <Useeffected/>
      <Digitalclock/>
      <Current/>
      <Apps/>
            {!showPrompt && (
              <>
      <Food/>
      <Card/>
      <Detail name="Yasmin" age={25} ITDepartment={true}/>
      
      {/* <Detail/> */}
      <Button onClick={handleClick} />
      <br></br>
      <Buton/>

      {Fruits.length>0 && <List items={Fruits} category="Fruits"/> }
      {Vegetables.length>0 && <List items={Vegetables} category="vegetables"/> }
      {/* <Usergreetings isloggedin={isLoggedIn} username="Yasmin"/> */}
      {/* <Footer/> */}
      <Profile/>
      <Mycomponent/>
      <Counter/>
      <Mycomp/>
      <Colorpicker/>
      <Updatefunction/>
      <UpdateObject/>
      <Updatearray/>
      <Mycar/>
      
      
      
      
   
    </>
            )}
      {showPrompt && (
      <>
      <Usergreetings isloggedin={isLoggedIn} username="Yasmin" />
      <ToDolist/>
      <ComponentA/>
      </>
   )}
       
        <Footer />
        
         
  </>
  
  
  )}

export default App
