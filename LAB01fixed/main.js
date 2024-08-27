function App(){
    const putName = prompt('Type your Name and Surname')
    const bornAge  = prompt('Type your Born Age')

    const sth = {color : 'blue', backgroundColor : 'white'}
    const stp = {color : 'yellow', backgroundColor : 'red'}
    const fullYear = Number(new Date().toDateString().split(' ')[3] - bornAge)
   
    // console.log(new Date().getTime())

    // console.log(new Date("1970-01-01").getTime())
    // console.log(new Date("1970-01-02").getTime())
    
    // let x = new Date("1971-01-01").getTime()
    // console.log(x/1000) //  sec.
    // console.log(x/1000/60)  //min.
    // console.log(x/1000/60/60)  //hrs.
    // console.log(x/1000/60/60/24)  //day

    // let y = new Date("2024-08-26").getTime()
    
    return(
        <div>
            <h1 style = {sth}>Name : {putName}</h1>
            <p style = {stp}>Age : {fullYear}</p>
            
        </div>
    )
}
    




const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)