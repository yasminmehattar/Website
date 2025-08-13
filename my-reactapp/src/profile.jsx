function Profile(){
    const imageurl= './src/assets/profile.jpg'
    const handleClick= (e)=>e.target.style.display="none"
    return(<img onClick={(e)=>handleClick (e)}src={imageurl}></img>)

}
export default Profile