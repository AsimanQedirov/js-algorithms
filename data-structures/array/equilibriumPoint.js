// function equilibriumPoint(arr) {
//     let ltrSum = arr[0];
//     let rtlSum = arr[arr.length - 1];

//     let i = 1;
//     let j = arr.length - 2;

//     while (i < arr.length && j > 0) {

//         if (i === j)
//             break;

//         if (ltrSum > rtlSum && i !== j) {
//             rtlSum += arr[j];
//             j--;
//         }
//         if (rtlSum > ltrSum && i !== j) {
//             ltrSum += arr[i];
//             i++;
//         }
//     }

//     return ltrSum === rtlSum ? i + 1 : -1

// }

function equilibriumPoint(arr) {

    const lengthOfArray = arr.length;
    let totalSum = 0, leftSum = 0, rightSum = 0;

    for (let index = 0; index < lengthOfArray; index++) {
        totalSum += arr[index];
    }

    for (let index = 0; index < lengthOfArray; index++) {

        console.log("element : " , arr[index]);
        

        rightSum = totalSum -leftSum - arr[index];

        console.log("rightSum : " , rightSum);
        

        if (leftSum === rightSum) {
            return index + 1
        }

        leftSum += arr[index];

    }

    return -1;

}

console.log(equilibriumPoint([1,3,5,2,2]))