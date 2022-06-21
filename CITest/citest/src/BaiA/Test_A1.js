import React from "react";

export default function Test_A1() {
    let A1 = [1, 2, "a"];
    let A2 = [1, 3, "b"];
    let result = A1.concat(A2);
    function A (result){
        let x = [...new Set(result)];
        x.shift() ;
        return console.log(x);
    }
    A(result);
}