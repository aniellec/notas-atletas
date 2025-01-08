class Atleta {
    constructor (nome, notas){
        this.nome = nome;
        this.notas = notas;
     }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let todosAtletas = atletas.map(atleta => new Atleta(atleta.nome, atleta.notas));

let numeroAtletas = todosAtletas.length;

function sortfunction(a, b){
  return (a - b);
}

console.log("Saída:\n");

console.log("Número de atletas: " + numeroAtletas + "\n")

for (let i = 0; i < numeroAtletas; i++) {
    let atletaAtual = todosAtletas[i];
   console.log(`\nAtleta: ${atletaAtual.nome}`);
   console.log(`Notas Obtidas: ${atletaAtual.notas}`);
   let notasValidas = atletaAtual.notas.sort(sortfunction).slice(1,4);
   console.log(`Notas Válidas: ${notasValidas}`);
   let mediaValida = notasValidas.reduce((soma, nota) => soma + nota, 0) / 3;
   console.log(`Média Válida: ${mediaValida}`);
}
