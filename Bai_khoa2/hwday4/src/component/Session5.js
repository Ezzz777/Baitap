import React, { useState } from "react";


export default function Session5(){
    
    

    const [red, setred] = useState(true);
    const [yellow, setyellow] = useState(false);
    const [green, setgreen] = useState(false);

    const clicktochange = () => {
        if (red == true){
            setred(false);
            setyellow(true);
        }
        if (yellow == true){
            setred(false);
            setyellow(false);
            setgreen(true);
        }
        if (green == true){
            setred(true);
            setyellow(false);
            setgreen(false);
        }
    };

    return (
        <div>
            <button onClick={clicktochange}>Next</button>
            <div className="container">
                <div className={red ? "circle red" : "circle"}></div>
                <div className={yellow ? "circle yellow" : "circle"}></div>
                <div className={green ? "circle green" : "circle"}></div>
            </div>
        </div>
    )
}