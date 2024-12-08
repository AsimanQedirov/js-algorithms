function missingNumberInArray(array) {
    let sum = 0;
    let expectedArrayLength = array.length+1;
    let expectedSum = (expectedArrayLength * (expectedArrayLength + 1)) / 2;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return expectedSum - sum;
}

// given array : [1,2,3,5];
//output : 4
