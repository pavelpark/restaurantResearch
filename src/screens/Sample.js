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
                    list1: i,
                    list2: j,
                    value: newValue
                }
                newArray.push(match)
            }
        }
    }
    return newArray
};

const result2 = compare(list1, list2)
console.log(result2);