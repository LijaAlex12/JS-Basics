function add(num1,num2){
  return num+num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function divide(num1,num2){
  return num1/num2;
}
function subtract(num1,num2){
  return num1-num2;
}
function calculator(num1,num2,operator){
  return operator(num1,num2);
}


#here calculator is the higher order function and operator is the call back function
console.log(calculator(1,2,add));
console.log(calculator(1,2,multiply));
