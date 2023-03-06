import React, { useState } from "react";

const Counter = () => {

    const [num, setNum] = useState(0);

    const incrNum = () => {
     setNum(num+1);
    };

    const decrNum = () => {
        if(num-1<0){
            alert("you can't decrease than 0 ");
        }
        else{
            setNum(num-1);
        }
    };

  return(
   <>
     <div className="main_div">
      <div className="main_center">
        <h1> {num} </h1>
        <div className="button_div">
          <button onClick={incrNum}>
          <i class="fa-solid fa-plus"></i>
          </button>

          <button onClick={decrNum}>
          <i class="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
     </div>
   </>
  );
}

export default Counter;