function App(){
    const img = {borderRadius : '100%'}
    const divb = {backgroundColor : 'white', padding : '20px', textAlign : 'center', margin : '10px', borderRadius : '20px', width : '80%', 
                 boxShadow : '4px 4px 4px grey', display : 'flex', flexDirection : 'column', justifyContent :'space-evenly'}
    const divd = {display : 'flex', justifyContent : 'space-evenly'}
    const pindiv = {color : 'grey', fontSize : '32px'}
    const head = {fontSize : '36px'}
    return(
        <div style = {divb}>
            <div>
                   <img src='https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80
    ' style = {img} />
            <p style = {head}>Julienne Moore</p>
            <p style ={pindiv}>Julienne.moore@company.com</p>
            </div>
            <div style = {divd}>
                <p>{Appinside('25','Posts')}</p>
                <p>{Appinside('350','Following')}</p>
                <p>{Appinside('1.5K','Followers')}</p>

            </div>
     


        </div>

    )
}

function Appinside(num,text){
    const pindiv = {color : 'grey', fontSize : '32px'}
    const h3 = {fontSize : '32px'}
    return (
        <div>
            <h3 style = {h3}>{num}</h3>
            <p style ={pindiv}>{text}</p>

        </div>
    )
}

function Appbody(){
    const divB = {backgroundColor : 'lightblue', display : 'Flex', justifyContent : 'center', minHeight : '720px'}
    
    return (
        
        <div style = {divB}>
            <App />
        </div>
    )
    
}
    




const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<Appbody />)