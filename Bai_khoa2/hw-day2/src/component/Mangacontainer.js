import React from "react";
import MangaContainer from "../css/MangaContainer.css";


export default function Mangacontainer({photo, views, comment ,tittle ,chapper ,date}){
    return(
        <div className="manga">
            <div className="box1">
                <img className="img" src= {photo} alt="Đây là ảnh"/>
                <div className="count">
                    <div><i className="fa-solid fa-eye"></i> {views}</div>  
                    <div><i className="fa-solid fa-comment"></i> {comment}</div>
                </div>
            </div>

            <div className="box2">
                <div className="tittle"> <b>{tittle}</b> </div>
                <div className="count2">
                    <div><p>{chapper}</p></div>
                    <div><p>{date}</p></div>
                </div>
            </div>
        </div>
    )
}

