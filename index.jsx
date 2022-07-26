function Spa(){
    return (<React.Fragment>
        <Hello></Hello>
    </React.Fragment>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Spa/>)