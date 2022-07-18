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
    res.innerHTML = ` ${imc} - Abaixo do Peso. <strong>Cuidado</strong>! \u{1F642}`;
  }
  else if(imc > 18.5 && imc <=24.9){
    res.innerHTML = ` ${imc} - Peso normal. <strong>Legal</strong>! \u{1F603}`;
  }
  else if(imc >=25 && imc <= 29.9){
    res.innerHTML = ` ${imc} - Você está com SobrePeso! \u{1F643}`;
  }
  else if(imc >= 30.0 && imc <=34.9){
    res.innerHTML = ` ${imc} - Obesidade I. Sinal de altera! \u{1F610} `;
  }
  else if(imc >=35 && imc <= 39.9){
    res.innerHTML = ` ${imc} - Obesidade II. Sinal <strong>Vermelho</Strong>! \u{1F636} `;
  }
  else if(imc >= 40 ){
    res.innerHTML = ` ${imc} - Obesidade III. <strong>Cuidado</Strong>! \u{1F62C} `;
  }
}
  
}
