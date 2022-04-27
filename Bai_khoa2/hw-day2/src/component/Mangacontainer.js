import React from "react";


export default function Mangacontainer({photo, views, comment ,tittle ,chapper ,date}){
    return(
        <div className="manga">
            <div className="box1">
                <img className="img" src= {photo} alt="Đây là ảnh"/>
                <div className="count">
                    <div><p>{views}</p></div>  
                    <div><p>{comment}</p></div>
                </div>
            </div>

            <div className="box2">
                <h3> {tittle} </h3>
                <div className="count">
                    <div><p>{chapper}</p></div>
                    <div><p>{date}</p></div>
                </div>
            </div>
        </div>
    )
}

