// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
const array = [
    30,
    50, 
    31,
    18,
];

function comboArray(arr, a, b) {
    if(a < b) {
        return arr.slice(a, b + 1);
    } else {
        return [];
    }
};

const result = comboArray(array, 2, 3);

console.log(result);