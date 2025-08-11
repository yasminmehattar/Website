
function Detail(props){
    return(
        <div className="detail">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IT Department:{props.ITDepartment ? "yes" : "No"} </p>
        </div>
    )
}
export default Detail