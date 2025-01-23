// TS faz inferência de tipos

let nome1: string = 'Rodrigo';
let idade1: number = 23;
let adulto: boolean = true;

// Arrays precisam associar o tipo dos elementos 
let arrNum: Array<number> = [1, 5, 6, 7]

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: nome1,
    idade: idade1
}; // ? indica que não é obrigatório

console.log("Idade da pessoa" + pessoa.idade)

//Funções
function soma(x: number, y: number): number{
    return x + y;
}

const result = soma(2, 2)