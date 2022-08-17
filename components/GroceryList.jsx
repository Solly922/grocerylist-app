function GroceryList(){
    const [item, setItem] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [groceryList, setGroceryList] = React.useState([]);

    React.useEffect(() => {
        updateTotal();
        console.log('using effect')
    })
    
    function updateTotal(){
        let result = 0;
            groceryList.forEach((item) => {
                console.log(item)
                result += parseFloat(item.price) * parseFloat(item.amount);
            })
        setTotalPrice(Math.round(result * 100) / 100);
    }
    
    function addToList() {
        console.log(`adding ${item}: ${count} to list`);
        setGroceryList([...groceryList, {name: item, amount: count, price: price}]);
        console.log(groceryList);
    }
    
    function deleteItem(index) {
        let newList = groceryList.filter((item, i) => index != i);

        setGroceryList(newList);
    }
    
    let list = groceryList.map((item, index) => {
        return (
            <li key={index}>
                {item.name}: {item.amount} x{item.price}
                <button onClick={() => deleteItem(index)}>Remove</button>
            </li>
        )
    });

    return (
        <React.Fragment>
            <input type='text' id='item' placeholder="Grocery item" onChange={(e) => setItem(e.target.value)}/><br/>
            <input type='number' id='count' placeholder="Quantity" onChange={e => setCount(e.target.value)}/><br/>
            <input type='number' id='price' placeholder="Cost per item" onChange={(e) => setPrice(e.target.value)}/><br/>
            <button onClick={addToList}>Add to Cart</button>

            <h1>List: </h1>
            <ul>
                {list}
            </ul>
            <h1>Total: ${totalPrice}</h1>
            
            
        </React.Fragment>
    )
}
