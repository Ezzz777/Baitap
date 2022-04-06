// bài A1
let inputArray = ['binh','hung','phuoc','cao','khanh'];

function allLongestStrings(inputArray) {
    let max_string = [];
    let Max = 0;
    let result = [];
    for (let i of inputArray) {
        if (i.length > Max) {
            max_string.push(i)
        }
    }
    for (let z of max_string) {
        if (z.length == Max ) {
            result.push(z)
        }
    }
    console.log(result);
    return result
};
allLongestStrings(inputArray)

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