const array = [2,7,8,9,10,13,17,19,21]

function binarySearch(array, target) {
    // 1) define variables
    let left = 0;
    let right = array.length - 1;

    // 2) condition
    while (left < right) {
        let mid = Math.floor((left+right) / 2);

        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

//     // 3) if element is not found in array
//     return false;
}

function binarySearch(array, target) {
    // define variables
    let left = 0;
    let right = array.length - 1;

    // conditionals
    while(left<right) {
        let mid = Math.floor((array.length) / 2)
        if (target === array[mid]) {
            return mid
        } else if (target < array[mid) {
            left = mid - 1;
        } else {
            right = mid + 1;
        }
    }

    return false;
}






// refactored with recursive code -- cuts down on the processing time
// function binarySearch(array, target) {
//     return binarySearchHelper(array, target, 0, array.length - 1);
// }
// function binarySearchHelper(array, target, left, right) {
//     if (left > right) {
//         return false;
//     }

//     let mid = Math.floor((left + right) / 2);
//     if (target === array[mid]) {
//         return mid;
//     }
//     else if (target < array[mid]) {
//         return binarySearchHelper(array, target, left, mid - 1);
//     }
//     else {
//         return binarySearchHelper(array, target, mid + 1, right);
//     }
// }


// function binarySearch(array, target) {
//     return binarySearchHelper(array, target, 0, array.length - 1)
// }

// function binarySearchHelper(array, target, left, right) {
//     // 1) edge case
//     if (left>right) {
//         // which means we haven't found a target
//         return false;
//     }
//     // 2) define variable
//     let mid = Math.floor((left+right)/2)

//     // conditional
//     if (target === array[mid]) {
//         return mid;
//     } else if (target < array[mid]) {
//         return binarySearchHelper(array, target, left, mid - 1)
//     } else {
//         return binarySearchHelper(array, target, mid + 1, right)
//     }

// }


// console.log(binarySearch(array, 7));
