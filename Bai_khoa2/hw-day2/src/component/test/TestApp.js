import React, { useState } from "react";
import TestItem from "./TestItem";
import TestSearch from "./TestSearch";
import TestData from "../../data/TestData";
import "../../css/TestStyle.css";

export default function TestApp() {

    const [data, setData] = useState(TestData)
    return (<div>
        <TestSearch />
        <div className="TestItem">
            {data.map (item => <TestItem 
                key={item.id}
                id ={item.id}
                name={item.name}
                time={item.time}
                taskcount={item.taskcount}
                newcategories={item.newcategories}
            /> )}
        </div>
    </div>
    );
}