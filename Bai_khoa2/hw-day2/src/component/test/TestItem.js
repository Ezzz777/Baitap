import React from "react";
import "../../css/TestStyle.css"

export default function TestItem ({name, time, taskcount, newcategories,}) {
    return (
        <div className="test-item">
            <div className="test-name"><b>{name}</b></div>
            <div className="test-time-task">
                <span className="time">Thời gian {time}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="taskcount"> Số câu hỏi {taskcount} </span>
            </div>
            <div className="newcategories">{newcategories}</div>
        </div>
    );
}