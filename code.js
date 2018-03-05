$(document).ready(function(){
  //stores inputs from the user for calculate later
  var inputs = [];

  var total;
  var regex = /\d\.\d+(?!.)/;
  var operadores1 = ["+","-","/","*"];
  var operadores2 = [".","0."];
  var operadores3 = ["+","/","*"];
  var numeros = ['0','1','2','3','4','5','6','7','8','9'];
  function getValue(valor){
    // if(operadores2.includes(inputs[inputs.length -1]) && valor=="."){
    //   console.log('duplicado .');
    // }
    if(numeros.includes(inputs[inputs.length-1])===false && valor==="." && operadores2.includes(inputs[inputs.length-1])===false){
      inputs.push("0.");
    }
    else if(inputs.length===0 && operadores3.includes(valor)===false){
      inputs.push(valor);
    }
    else if(operadores1.includes(inputs[inputs.length-1])===false && inputs.length!==0 && valor!=="."){
      inputs.push(valor);
    }
    else if(valor==="." && regex.test(total)===false && operadores2.includes(inputs[inputs.length-1])===false) {
      inputs.push(valor);
    }

    else if(numeros.includes(valor)){
      inputs.push(valor);
    }
    updateString();
    console.log(inputs.length);
    console.log(regex.test(total));
  }
  function updateString(){
    total = inputs.join("").substring(0,10);

    $('#display').html(total);
  }
  function obtenerTotal(){

    total = eval(inputs.join("")).toString().substring(0,11);
    $('#display').html(total);
    console.log(total2);
    inputs=[];
  }
  $("button").on("click", function(){
    if(this.id=="ac"){
      inputs=[];
      updateString();
    }
    else if(this.id=="ce"){
      inputs.pop();
      updateString();
    }
    else if(this.id=="="){
      obtenerTotal();
      updateString();
    }
    else{
      getValue(this.id);
    }
  });


});
