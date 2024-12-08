function indexOfSubarraySum(arr, target) {
    let leftIndex = 0
    let rightIndex = 0

    let sum = 0

    for (let rightIndex = 0; rightIndex < arr.length; rightIndex++) {
        sum += arr[rightIndex]

        while (sum > target && leftIndex <= rightIndex) {
            sum -= arr[leftIndex]
            leftIndex++
        }

        if (target === sum) {
            return [++leftIndex, ++rightIndex]
        }
    }

    return [-1]
}

// given array : [1,2,3,7,5];
// target : 12
//output : [2,4]
