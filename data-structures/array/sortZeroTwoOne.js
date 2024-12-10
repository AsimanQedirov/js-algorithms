/*
 First approach : 
    function sortZeroTwoOne(arr) {
      return arr.sort((a, b) => a - b);
    }
*/

/*
  Second approach:
  Solving with Insertion sort
*/

/*
  Third approach:
*/
function sortZeroTwoOne(arr) {

    let zero = 0;
    let one = 0;
    let two = 0;

    const subArray = [];

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case 0:
                zero++;
                break;
            case 1:
                one++;
                break;
            default:
                two++;
                break
        }
    }

    for (let i = 0; i < zero; i++) {
        subArray.push(0);
    }

    for (let i = 0; i < one; i++) {
        subArray.push(1);
    }

    for (let i = 0; i < two; i++) {
        subArray.push(2);
    }

    return subArray;

}



console.log(sortZeroTwoOne([1,2,0]));


// array elements include just 0 , 1 and 2