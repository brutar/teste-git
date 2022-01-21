/* 
Mostra quantos cliques foram feitos da opções de estilos musicais
*/
const btn = document.querySelector('#btn');
const opt = document.querySelector("#tipoMusica");
var atributoOpt = document.querySelector(".op");

//contador das seleções
let contadorSelecao = 0;

opt.addEventListener("click", function(e){
			e.preventDefault();
      	if(e.target.textContent){
			contadorSelecao++;
        }
});
  
btn.addEventListener("click", function(e){
		e.preventDefault();
    document.querySelector("#resultado").textContent = contadorSelecao;
});