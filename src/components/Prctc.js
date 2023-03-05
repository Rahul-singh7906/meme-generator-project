export default function Prctc(){
    function helper(){
        console.log("I was Clicked")
    }
    function help(){
        console.log("Mouse Over")
    }
    return(
        <div className="container">
            <img onMouseOver={help} src="../image/cat1.jpeg" alt="pht-here"/>
            <button className="boton" onClick={helper}>Click Me</button>
        </div>
    );
}