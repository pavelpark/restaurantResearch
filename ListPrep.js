

let list1 = Array(100).fill((null)).map(() => Math.ceil(Math.random() * 1000)).sort((a, b) => a - b);
const list2 = Array(90).fill((null)).map(() => Math.ceil(Math.random() * 900)).sort((a, b) => a - b);



function compare(list1, list2) {
    const newArray = [];
    for (let i = 0; i < list1.length; i++) {
        const newValue = list1[i];
        for (let j = 0; j < list2.length; j++) {
            const newValue2 = list2[j];
            if (newValue === newValue2) {
                const match = {
                    index1: i,
                    index2: j,
                    value: newValue
                }
                newArray.push(match)
            }
        }

    }
    return newArray
};

function bianarySearch(arr, value) {
    var left = 0
    var right = arr.length - 1

    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2)

        if (value === arr[mid]) {
            return mid
        }
        if (arr[mid] < value) {
            left = mid + 1
        }
        if (arr[mid] > value) {
            right = mid - 1
        }
    }
    return false;
}

function compareBianarySearch(list1, list2) {
    const matchArray = [];
    for (let i = 0; i < list1.length; i++) {
        const newValue = list1[i];
        const matchIndex = bianarySearch(list2, newValue)
        if (matchIndex) {
            const matchObj = {
                index1: i,
                index2: matchIndex,
                value: newValue
            }
            matchArray.push(matchObj)
        }
    }
    return matchArray
};

const result = compareBianarySearch(list1, list2)
console.log(result);

const result2 = compare(list1, list2)
console.log(result2);