function GroceryList(){
    const [item, setItem] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [groceryList, setGroceryList] = React.useState([]);
    
    
    function addToList() {
        console.log(`${item}: ${count}`);
        setGroceryList([...groceryList, {name: item, amount: count}]);
        console.log(groceryList);
    }
    
    function deleteItem(index) {
        let newList = groceryList.filter((item, i) => index != i);

        setGroceryList(newList);
    }
    
    let list = groceryList.map((item, index) => {
        return (
            <li key={index} onClick={() => deleteItem(index)}>
                {item.name}: {item.amount}
            </li>
        )
    });

    return (
        <React.Fragment>
            <input type='text' id='item' placeholder="Enter grocery item" onChange={(e) => setItem(e.target.value)}/><br/>
            <input type='number' id='count' placeholder="Amount of item" onChange={e => setCount(e.target.value)}/><br/>
            <button onClick={addToList}>Add to Cart</button>

            <h1>List: </h1>
            <ol>
                {list}
            </ol>
            
            
        </React.Fragment>
    )
}
