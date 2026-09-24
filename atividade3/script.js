let nota1trim;
let mota2trim;
let resultado;

function calcular (){
    nota1trim = Number(prompt ("Digite a nota do primeiro trimestre:"));
    nota2trim = Number(prompt ("Digite a nota do segundo trimestre:"));

    resultado = 180 - (nota1trim + nota2trim);
if (resultado <= 0){
    alert ("Parabéns!Você passou");
}else{
    alert("Você ainda precisa tirar " + resultado + " pontos no terceiro trimestre para ser aprovado");
}
}