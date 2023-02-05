function findDuplicate(tab) {
    return new Set(tab).size !== tab.length;
}

const myArray = [1, 2, 3, 4, 5];
console.log(hasDuplicates(myArray)); // false

const myArrayWithDuplicates = [1, 2, 3, 4, 5, 3];
console.log(hasDuplicates(myArrayWithDuplicates)); // true