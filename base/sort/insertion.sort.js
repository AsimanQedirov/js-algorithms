/*
 !! Give array [8,5,2,7,1] => [1,2,5,7,8]
*/

function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let temp = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

console.log(insertionSort([14, 10, 9, 2, 0 ]));


