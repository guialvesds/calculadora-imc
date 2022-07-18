//
//
function calcular() {
  // let age = document.querySelector("#idade");
  let height = document.querySelector("#altura");
  let weight = document.querySelector("#peso"); 
  let res = document.querySelector("#res");

  let i = +weight.value;
  let n = +height.value / 100;
  let c = +(i / n ** 2);

if(weight.value.length == 0 && height.value.length == 0){
  alert("É necessário preencher o campo de peso e altura;");
}else {
  let imc = c.toFixed(2).toString('.',',')
  if(imc <= 18.5){    
    res.innerHTML = ` ${imc} - Abaixo do Peso. <strong>Vamos nos cuidar</strong>! \u{1F604}`;
  }
  else if(imc > 18.5 && imc <=24.9){
    res.innerHTML = ` ${imc} - Peso normal. <strong>Parabéns</strong>! \u{1F604}`;
  }
  else if(imc >=25 && imc <= 29.9){
    res.innerHTML = ` ${imc} - Você está com SobrePeso. Nada que uma dieta não resolva! \u{1F604}`;
  }
  else if(imc >= 30.0 && imc <=34.9){
    res.innerHTML = ` ${imc} - Obesidade grau 1. Sinal de altera! \u{1F928} `;
  }
  else if(imc >=35 && imc <= 39.9){
    res.innerHTML = ` ${imc} - Obesidade grau 2. Sinal <strong>Vermelho</Strong>! \u{1F928} `;
  }
  else if(imc >= 40 ){
    res.innerHTML = ` ${imc} - Obesidade grau 3. Sinal <strong>Vermelho</Strong>! \u{1F928} `;
  }
}
  
}
