import React, {useState} from "react";

function Button(){

    const [headingText, setHeadingText] = useState("Blog");
    const [isMouseOver, setMouseOver] = useState("false");

    function handleClick(){
        setHeadingText("My Work");

    }
function handleMouseOver(){
    setMouseOver(true);
}
function handleMouseOut(){
    isMouseOver(false);
}
      
    return(
<div className="container">
    <h1>{headingText}</h1>
    <button onClick={handleClick}
    style={{backgroundColor: isMouseOver? "orange":"grey"}}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    >Click Here</button>
    
</div>
    );
}

export default Button;