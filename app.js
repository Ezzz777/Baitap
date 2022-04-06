// bài A1
let users = ['binh','hung','phuoc','cao','khanh'] 
function maxString(arrStrings){
    let max = arrStrings[0].length
    let LongestLength = []
    for ( let i = 0 ; i < arrStrings.length; i++){
        let longestStr = arrStrings[i].length
        if(longestStr > max){
          LongestLength.push(arrStrings[i])
        }
    }
    return LongestLength
}

let arrLongestLength = maxString(users)
console.log('arrLongestLength',arrLongestLength)

// bài A2
// let users = [
//     {
//         "id": 1,
//         "weight": 60,
//     },
//     {
//         "id": 2,
//         "weight": 40,
//     },
//     {
//         "id": 3,
//         "weight": 55,
//     },
//     {
//         "id": 4,
//         "weight": 75,
//     },
//     {
//         "id": 5,
//         "weight": 64,
//     }
// ];
// function sumWeight(users) {
//     let group1 = [];
//     let group2 = [];
//     for (let i of users) {
//         if (i.id % 2 == 0) {
//             group2.push(i.weight)
//         } else {
//             group1.push(i.weight)
//         }
//     }
//     console.log(group1);
//     console.log(group2);
//     return group1 & group2
// }
// sumWeight(users)