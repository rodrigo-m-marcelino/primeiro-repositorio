
// Pode ser dos tipos que eu determinei

function addOrConcat(a: number | string, b: number | string){
    if (typeof a == 'number' && typeof b == 'number')
        return a + b;
    return `${a} e ${b}`
}

console.log(addOrConcat(10,20))