const Message=(props)=>{
  const {text,bgcolor,children}=props
  return <div>
    this is my first message
    <br/>
    {text}
    {children}

    </div>
}

const Cat=()=>{
  return(
    <div className="p-2 border-2 rounded-lg border-amber-400 ">
      <i className="fa-solid fa-house text-4xl text-blue-500"></i>
    </div>
  )

}


const Apps=()=>{
  return <>
  <div>
    <Message text="this is my first prop " bgcolor="red"/>
    Hello!
    
    </div>
    <div className="flex flex-col h-64 w-full p-8 m-8 border-2 border-blue-800 bg-blue-500">
      <Cat/>
      <Cat/>
      <Cat/>

    </div>
          </>
 };
 
export default Apps

