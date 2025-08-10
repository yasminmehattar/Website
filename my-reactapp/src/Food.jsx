function Food(){
    const food1="orange"
    const food2="apple"
    return(
        <div>
            <ul>
                <li>{food1}</li>
                <li>banana</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </div>

    );
}
export default Food