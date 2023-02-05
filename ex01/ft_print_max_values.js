function printMax(array) {
    let nombre1 = 0;
    let nombre2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > nombre1) {
            nombre2 = nombre1;
            nombre1 = array[i];
        } else if (array[i] > nombre2) {
            nombre2 = array[i];
        }
    }
    return [nombre2, nombre1];
}

const tab = [9, 6, 2, 3, 1, 4, 5];
console.log(printMax(tab));