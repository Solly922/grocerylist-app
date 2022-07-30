function Spa(){
    return (<React.Fragment>
        <GroceryList/>
    </React.Fragment>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Spa/>)