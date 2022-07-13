import React,{useState} from "react";

function App(){



const now = new Date().toDateString();

const [date, setDate] = useState(now);

function updateTime(){
 const newDate = new Date().toLocaleDateString();
 setDate(newDate);
}

    return(
        <div className="date">
<h1>{date}</h1>
<button onClick={updateTime}>Get Date</button>
        </div>
    );
}

export default App;