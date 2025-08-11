import './index.css'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Button from './Button/button.jsx'
import Detail from './Details.jsx'


function App() {
   return(
    <>
      <Header/>
      <Food/>
      <Card/>
      <Detail name="Yasmin" age={25} ITDepartment={true}/>
      <Button/>
      <Footer/>
      
   
    </>
      
  )
  
  
}

export default App
