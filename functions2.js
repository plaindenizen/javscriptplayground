// create a function that takes an array and return types of the elements (data types, (boolean, string, integers)) in an array
//ex: arrTypes([1,3 "ali", []]) -> ["number", "number", "string", "object"]

// function arrTypes() {
//     let newArray = []
//     for(let i = 0; i<arrTypes.length; i ++) {
//         newArray[i] = typeof(arr[i])

//     }
//     return newArray
// }
// console.log(arrTypes)

// // ES6
// // const arrTypes = a => arr.map(x => typeof x)
// //.map function takes an existing array and modifies the elements in a certain way, while still preserving the elements of the original array

// //take a function that takes 2-D arrays and returns the sum of minimum values in each row
// sumMinArrays(
//     [1, 2, 3, 4, 5,],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15]
// )
// // output > 1+6+11 = 18

// console.log(sumMinArrays)

//  // arrays within arrays
// // function sumMinArrays(arr) {
// //     let sum = 1;

    // for(let i = 0; i <arr.length; i++) {
    //     let y = arr[i][0]
    //     for(let x = 0; x<arr[i].length; x++) {
    //         if(y > arr[i][x]) {
    //             y = arr[i][x]
    
// //             }
// //     }
    
// //     }
// //     sum += y

// //     console.log(arr)
// // }
// //sum = sum +y

// //create a function that takes an array, return duplicate numberes in new array.
// //ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [5,1]

const ArrayDuplicateNumbers = arr => {
    arr= [...new Set([...arr.filter(num =>
        arr.indexOf(num) !== arrlastIndexOf(num))
    ])].sort((a,b) => a-b),
    arr.length ? arr: null
}
//idk
console.log(ArrayDuplicateNumbers([1,2,3,4,5,6,1]))