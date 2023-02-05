function findDuplicate(tab) {
    for (let i = 0; i < tab.length; i++) {
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[i] === tab[j]) {
                return true;
            }
        }
    }
    return false;
}


let nbr = [8, 5, 3, 6, 4, 1];
console.log(findDuplicate(nbr));
