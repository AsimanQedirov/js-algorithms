/*
 !! Return the result in ascending order.
*/

function findSecondLargestElementOfArray(arr) {
    const tempObject = {};
    const sortedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let keyInObject = tempObject[arr[i]]

        if (keyInObject) {
            tempObject[arr[i]] = ++keyInObject
            if (tempObject[arr[i]] === 2) {
                sortedArray.push(arr[i]);
            }
        } else {
            tempObject[arr[i]] = 1
        }
    }

    for (let i = 0; i < sortedArray.length; i++) {

        if (sortedArray.length === 1) {
            return sortedArray;
        }
        let temp = sortedArray[i];
        let j = i - 1;

        while( j >= 0 && sortedArray[j] > temp) {
              sortedArray[j+1] = sortedArray[j];
              j--;
        }
        sortedArray[j+1] = temp;
    }

    /*
        additional method for sorting:
        !! return sortedArray.sort((a,b)=>a-b)
    */

    return sortedArray
};

console.log(findSecondLargestElementOfArray([1,2,3,2,0,0,4]))
