let PI = 3.14;

export function sum(a,b){
    let sumResult = a+b;
    console.log(sumResult);
    return sumResult
}

export function  calculateRectArea(a,b){
    let calculateRectAreaResult = a * b;
    console.log(calculateRectAreaResult);
    return calculateRectAreaResult
}


export function calculateCircleArea (r){
    let calculateCircleAreaResult = r **2 *PI
    console.log(calculateCircleAreaResult);
    return calculateCircleAreaResult;
} 