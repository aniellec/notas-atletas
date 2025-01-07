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

new class Atleta {
    construct (nome, notas){
        this.nome = nome;
        this.notas = notas;
     }

     media(notas){
         return this.notas.reduce((soma, nota) => soma + nota, 0) / this.notas.length;
         console.log();
     }
}


