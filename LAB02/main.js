function App(){
    const std = {backgroundColor : 'black', color : 'white', padding : '20px'} 
    const stdi = {backgroundColor : '#343A46', color : '#23272F', padding : '20px', borderRadius : '30px'}
    const h2 = {color : 'white'}
    const li = {color : 'white'}
    return(
        <div style = {std}>
           <h1>Quick Start</h1>
           <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
           <div style = {stdi}>
                <h2 style = {h2}>You will learn</h2>
                <ul>
                    <li style = {li}>How to create and nest components</li>
                    <li style = {li}>How to add markup and styles</li>
                    <li style = {li}>How to display data</li>
                    <li style = {li}>How to render conditions and lists</li>
                    <li style = {li}>How to respond to events and update the screen</li>
                    <li style = {li}>How to share data between components</li>
                </ul>
           </div>
        </div>
    )
}
    




const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)