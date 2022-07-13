import React, {useState} from "react";

function Count(){

    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }
    return(
        <div className="count">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Count;