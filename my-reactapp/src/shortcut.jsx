const Message=(props)=>{
  const {text,bgcolor}=props
  return <div>
    this is my first message
    {text}

    </div>
}


const App=()=>{
  return <div>
    <Message text="this is my first prop " bgcolor="red"/>
    </div>
 };

 function App(){
  return(
    <div>
      <Message1 text="this is my second prop" bgcolor="green"/>
      </div>
  )
 }
 function Message1(props){
  const {text,bgcolor}=props
  return(
    <div>
      This is my first message
      {text}
      </div>

  )
 }

 
export default App

