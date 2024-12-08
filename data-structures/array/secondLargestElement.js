function findSecondLargestElementOfArray(arr) {
    let maxElement = -1
    let secondMaxElement = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            secondMaxElement = maxElement
            maxElement = arr[i]
        }

        if (arr[i] !== maxElement && secondMaxElement <= arr[i]) {
            secondMaxElement = arr[i]
        }
    }

    return maxElement
}

console.log(findSecondLargestElementOfArray([12, 35, 1, 10, 34, 1]))

// [12, 35, 1, 10, 34, 1]
// 34

// [10 , 5 , 10]
// 5

// [10 , 10 , 10]
// -1
