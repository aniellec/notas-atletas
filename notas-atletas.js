// Definição da classe 
//class Usuario {
    // classe vazia
//}

// Digite seu código abaixo
//let usuario1 = new Usuario();
//let usuario2 = new Usuario();






class Atleta {
    constructor (nome, notas){
        this.nome = nome;
        this.notas = notas;
     }

    sort(){
        return this.notas.sort();
    }

     media(){
         return this.notas.reduce((soma, nota) => soma + nota, 0) / this.notas.length;
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

//let notasComputadas = todosAtletas.atleta.notas.slice(1,4)

console.log("Saída:\n");

console.log("Número de atletas: " + numeroAtletas + "\n")

for (let i = 0; i < numeroAtletas; i++) {
    let atletaAtual = todosAtletas[i];
   console.log(`Atleta: ${atletaAtual.nome}`);
}
