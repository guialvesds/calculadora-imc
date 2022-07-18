//
//
function calcular() {
  // let age = document.querySelector("#idade");
  let height = document.querySelector("#altura");
  let weight = document.querySelector("#peso"); 
  let res = document.querySelector("#res");

  let i = Number(weight.value);
  let n = Number(height.value) / 100;
  let c = (i / n ** 2).toFixed(2).replace(".", ",");

if(weight.value.length == 0 && height.value.length == 0){
  alert("É necessário preencher o campo de peso e altura;");
}else {
  if(c <30){
    res.innerHTML += ` ${c} - Peso normal. <strong>Parabéns</strong>! \u{1F604}`;
  }
}

  
    
//   if (c < 24.9) {    
//     res.innerHTML += ` ${c} - Peso normal. <strong>Parabéns</strong>! \u{1F604}`;
//   } else if (c < 29.9) {
//     res.innerHTML = ` ${c} - Você está com SobrePeso. Nada que uma dieta não resolva! \u{1F604}`;
//   } else if (c > 30.0) {
//     res.innerHTML = ` ${c} - Obesidade grau 1. Sinal de altera! \u{1F928} `;
//   } else if (c > 40.0) {
//     res.innerHTML = ` ${c} - Obesidade grau 3. Sinal <strong>Vermelho</Strong>! \u{1F928} `;
//   } else if (weight.value.length == 0 && height.value.length == 0) {
//     alert("É necessário preencher o campo de peso e altura;");
//   }
}
