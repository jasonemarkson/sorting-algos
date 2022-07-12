const div = document.getElementById("main")
const array = [187, 77, 21, 8, 345, 43, 32, 5643, 63, 123, 43, 55, 9, 423, 87]

// function selectionSort(array) {
//     // one way to make the code non-destructive is to make a shell copy of it using slice then updating all the "array"s to "arr"
//     const arr = array.slice()

//     for(let i=0; i<arr.length - 1; i++) {
//         let minIndex = i
//         for (let j = i+1; j<arr.length; j++) {
//             if ( arr[j] < arr[minIndex] ) {
//                 minIndex = j
//             }
//         }
//         // #1 way to code this
//         // const temp = arr[i]
//         // arr[i] = arr[minIndex]
//         // arr[minIndex] = temp


//         // #2 way to refactor - less code
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

//     }
//     return arr

//     // Adding sorted array to a div
//     // let ul = document.createElement('ul')
//     // ul.innerHTML = selectionSort(array).map(e => `<li>${e}</li>`)
//     // div.appendChild(ul)
//     // console.log("After Sorting...", selectionSort(array))
// }

// function bubbleSort(array) {
//     // outer for loop keeps track of which index we're on -- we don't need to compare the very last index 
//     for (let i = 0; i<array.length - 1; i++) {
//         // inner loop compares the index adjacent to i
//         for (let j = 0; j < array.length - 1 - i; j++) {

//             if (array[j] > array[j+1]) {
//                 // if the value of j is greater than the value of j+1 (or the value of element adjacent to it)
//                 // then switch the positions of the array --> 
//                     const temp = array[j]
//                     array[j] = array[j+1]
//                     array[j+1] = temp

//                 // or in one line of code like so
//                     // [array[j], array[j+1]] = [array[j+1], array[j]]

//             }
//         }
//     }
//     return array;
// }

// function insertionSort(array) {
//     const arr = array.slice()
//     for (let i = 1; i < arr.length; i++) {
//         for (let j=i; j>0; j--) {
//             if (arr[j]<arr[j-1]) {
//                 [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
//             } else {
//                 break
//             }
//         }   
//     }
//     return arr
// }

// function insertionSort(array) {
//     const arr = array.slice()
//     for(let i = 1; i < arr.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j-1]) {
//                 [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
//             }
//         }
//     }
//     return arr
// }


// function quickSort(array) {
//     // (1) take care of edge case - in case an array is only 1 element
//     if (array.length === 1) {
//         return array
//     }

//     // (2) create a "pivot" or a number that will be used to compare all other elements numerically and to divide into two arrays
//     const pivot = array[array.length - 1]
//     const arr1 = [];
//     const arr2 = [];

//     // (3) if an element is lower than the pivot, put into arr1; if element is higher than the pivot, put into arr2
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] < pivot) {
//             arr1.push(array[i])
//         } else {
//             arr2.push(array[i])
//         }
//     }

//     // handle edge cases to deal with any of these arrays having an array of 1 element (THEY COULD BE EMPTY if pivot is the smallest or greatest value)
//     if (arr1.length > 0 && arr2.length > 0) {
//         return [...quickSort(arr1), pivot, ...quickSort(arr2)]
//     } else if (arr1.length > 0) {
//         return [...quickSort(arr1), pivot];
//     } else {
//         return [pivot, ...quickSort(arr2)]

//     }

// }

// refactored quickSort
// function quickSort(array) {
//     if (array.length <= 1) {
//         return array
//     }

//     const pivot = array[array.length - 1]
//     const leftArr = [];
//     const rightArr = [];

//     // we want to exclude the pivot from our array in for loop
//     for (const element of array.slice(0, array.length - 1)) {
//         element < pivot ? leftArr.push(element) : rightArr.push(element)
//     }

//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
// }

// already sorted arrays
// const merge = (leftArr, rightArr) => {
//     const output = [];
//     let leftIndex = 0; 
//     let rightIndex = 0;

//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         const leftEl = leftArr[leftIndex]
//         const rightEl = rightArr[rightIndex]

//         if (leftEl < rightEl) {
//             output.push(leftEl)
//             leftIndex++
//         } else {
//             output.push(rightEl)
//             rightIndex++
//         }
//     }

//     return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]

// }

// const mergeSort = array => {
//     // with recursive functions we need to establish an edge case
//     if (array.length <= 1) {
//         return array
//     }

//     const middleIndex = Math.floor(array.length / 2)
//     const leftArr = array.slice(0, middleIndex);
//     const rightArr = array.slice(middleIndex);

//     return merge(
//     // we're recursively calling the mergeSort function here which sorts these arrays - by doing this we know that we're passing in sorted arrays to the merge helper function
//         mergeSort(leftArr),
//         mergeSort(rightArr)
//     );

// }


// console.log("Array", ...array)
console.log("mergeSort", mergeSort(array))
