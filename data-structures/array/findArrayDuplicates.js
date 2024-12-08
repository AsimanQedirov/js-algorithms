/*
 !! Return the result in ascending order.
*/

function findSecondLargestElementOfArray(arr) {
    const tempObject = {}
    const sortedArray = []
    for (let i = 0; i < arr.length; i++) {
        let keyInObject = tempObject[arr[i]]

        if (keyInObject) {
            tempObject[arr[i]] = ++keyInObject
            if (tempObject[arr[i]] === 2) {
                sortedArray.push(arr[i])
            }
        } else {
            tempObject[arr[i]] = 1
        }
    }
    let temp = sortedArray[0]
    for (let i = 0; i < sortedArray; i++) {
        if (temp > sortedArray[i]) {
        }
        temp = sortedArray[i]
    }
    return sortedArray
}

console.log(findSecondLargestElementOfArray([3, 1, 0, 4, 2, 3, 1]))
