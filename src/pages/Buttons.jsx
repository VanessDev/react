import { useState } from "react"
import Button from "./Calculator2";

function Buttons()  {

    function handleClickTata(){
        alert('test tata');
    }

    function handleclickToto() {
        alert('test toto');
    }
  
    return(
        <>
          <div className="exo3">
                < Button value={"0"} nameOfMyClass={'red'} functionClick={handleClickTata}/>
                < Button value={"1"} nameOfMyClass={'green'} functionClick={handleclickToto}/>
                < Button value={"2"} nameOfMyClass={'red'} functionClick={handleclickToto}/>
                < Button value={"+"} nameOfMyClass={'green'} functionClick={handleClickTata}/>
            </div>
        </>
    )
}

export default Buttons