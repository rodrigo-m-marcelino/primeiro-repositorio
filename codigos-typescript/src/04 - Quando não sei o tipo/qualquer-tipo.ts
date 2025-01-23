// any

// unknown => força a checagem de tipo -> segurança
let x: unknown;
const y: number = 13
x = 100;
x = 'Luiz';
x = 900;

if (typeof x === 'number') console.log(x + y);
