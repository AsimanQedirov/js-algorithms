function findArrayLeaders(arr) {
    const leaderArrayList = [];

    for (let i = 0; i < arr.length; i++) {
        let isLeader = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (!(arr[i] >= arr[j])) {
                isLeader=false;
                break;
            }
        }
        if (isLeader)
            leaderArrayList.push(arr[i]);
    }

    return leaderArrayList
}

console.log(findArrayLeaders([16, 17, 4, 3, 5, 2]));


// input : [16, 17, 4, 3, 5, 2]
// output : [17, 5, 2]

// input : [10, 4, 2, 4, 1]
// output : [10, 4, 4, 1]

// input : [5, 10, 20, 40]
// output : [40]