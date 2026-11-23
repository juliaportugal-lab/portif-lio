let contasorte = 0;
let contaazar = 0;

function sorte(){
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random ();
let num = min + Math.trunc (dif * aleatorio);

let mostrar = document.getElementById('resultado');
 if (num > 50){
    contasorte++;
    mostrar.innerHTML = `<p>SORTE: ${contasorte}</p><img src= "https://s2.glbimg.com/CnyUrkjR3zksZ7EDRAGIj2terJ0=/e.glbimg.com/og/ed/f/original/2018/03/05/luck.jpg"`
 }else{
    contaazar++;
    mostrar.innerHTML = `<p>AZAR: ${contaazar}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOP1dRXUBz92BTwGdTjAYq6YawVN-X5pU_lsNvmg3k9w&s=10"`
 }
}














