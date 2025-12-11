import { useState } from "react"

function Button()  {

    function handleClickTata(){
        alert('test tata');
    }

    function handleclickToto() {
        alert('test toto');
    }
  
    return(
        <>
        <div>
            <button className="red" onClick={handleClickTata}>0</button>
            <button className="red"onClick={handleClickTata} >2</button>
            <button className="green" onClick={handleclickToto}>1</button>
            <button className="green" onClick={handleclickToto}>+</button>
        </div>
        </>
    )
}

export default Button