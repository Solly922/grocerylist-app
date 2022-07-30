function GroceryList(){
    const [newItem, setNewItem] = React.useState('');
    const [count, setCount] = React.useState(0);

    function handleSubmit() {
        console.log(`${newItem}: ${count}`);
    }

    return (
        <React.Fragment>
            <input type='text' id='item' placeholder="Enter grocery item" onChange={(e) => setNewItem(e.target.value)}/><br/>
            <input type='number' id='count' placeholder="Amount of item" onChange={e => setCount(e.target.value)}/><br/>
            <button onClick={handleSubmit}>Submit</button>
            
        </React.Fragment>
    )
}
