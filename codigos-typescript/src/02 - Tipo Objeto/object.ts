const objt: {readonly keyA: string; keyB: string; keyC?: number} = {
    keyA: 'Valor A',
    keyB: 'Valor B',
    keyC: 90
}


// keyA não pode ser alterada

objt.keyB = 'Valor novo';


// Tipo Tupla
const dadosCliente: [number, string] = [1, 'Luiz']