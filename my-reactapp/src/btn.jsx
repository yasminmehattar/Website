function Buton(){
    const handleClick= () => console.log("OUCH")
    // const handleClick2=(name)=>console.log(`${name} stop clicking me`)
    // let count=0;
    // const handleClick2=(name)=>{
    // if (count<3){
    // count++;
    // console.log(`${name}clicked me${count}times`)}
    // else{
    //     console.log(`${name}stop clicking me`)
    // }}
    const handleClick2= (e)=>e.target.textContent="OUCH";
    return(
        <button onDoubleClick={(e)=>handleClick2 (e)}>Click</button>

    )
}
export default Buton