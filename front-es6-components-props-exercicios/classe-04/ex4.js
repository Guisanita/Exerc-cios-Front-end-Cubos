// const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
// const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
// const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

// let allClasses = classA.concat(classB);

// allClasses = allClasses.concat(classC[0], classC[1], classC[4], classC[5]);

// console.log(allClasses);

const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

const [name1, name2, name3, name4, name5, name6] = classC;

const allClasses = [...classA, ...classB, name1, name2, name5, name6];

console.log(allClasses);


