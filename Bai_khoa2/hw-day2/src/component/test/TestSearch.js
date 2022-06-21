import React from "react";
import "../../css/TestSearch.css"

export default function TestSearch() {

    return (
        <div className="test-search">
            <div className="imput-search">
                <label>Nhập từ khóa tìm kiếm</label>
                <input className="test-input"></input>
            </div>

            <div className="action">
                <button className="search">Tìm Kiếm</button>
            </div>
        </div>
    );
}