const array = [8, 2, 3, 5, 1, 34, 426, 75, 24, 31, 10]

const quickSort = array => {
    // 1) edge case
    if (array.length <= 1) {
        return array;
    }

    // 2) define variables
    const pivot = array[array.length - 1]
    const leftArr = [];
    const rightArr = [];

    // 3) conditionals
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i])
        } else {
            rightArr.push(array[i])
        }
    }

    // 4) return
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]

}

console.log(quickSort(array))





