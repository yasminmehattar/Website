function List(props){
   

    // Fruits.sort((a,b)=> a.name.localeCompare (b.name))Alphabetical
    // Fruits.sort((a,b)=> b.name.localeCompare(a.name)) reverse alphabetical 
    // Fruits.sort((a,b)=> a.calories-b.calories )  Numeric order 
    // Fruits.sort((a,b)=>b.calories-a.calories) Reverse numeric order   
    
    // const lowcalfruits= Fruits.filter(Fruit => Fruit.calories>70)
    // const highcalfruits=Fruits.filter(Fruit=> Fruit.calories<70)

    const itemsoflist=props.items;
    const category=props.category
    console.log("Category prop value:", category);

    const listitems= itemsoflist.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>)

    // Fruits.sort()
    return(<>
    <h3 className="heading">{category}</h3>
    <ul className="items">{listitems}</ul>

    </>)

    
}
List.defaultProps={
    category:"category",
    items:[]
}
export default List