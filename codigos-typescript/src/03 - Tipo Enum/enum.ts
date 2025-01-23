enum Cores{
    VERDE = 10,
    AZUL = 100,
    ROXO = 'ROXO'
}

function escolhaCor(cor: Cores): void{
    console.log(Cores[cor]);
}

escolhaCor(100);