import profilepic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className="image"src={profilepic} alt="Profilepicture"/>
            <h2 className='name'>yasminmehattar</h2>
            <p className='text'>QA</p>
            
        </div>

    )
}
export default Card