output=[];
var count=1 
// global variable declared outside the fn when used 
// inside the function on updation inside fn gets reflected outside 
// the function
 
function fizzbuzz(){
  
  while(count<=100){
    if(count%5===0 && count%3===0){
      output.push('fizzbuzz');
    }
    else if(count%3===0){
      output.push('fizz');
    }
    else if(count%5===0){
      output.push('buzz');
    }
    
    else{
      output.push(count);
    }
        
    count=count+1;
  }
    console.log(output);

}
fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// console.log('jnfb')
// console.log(output);

// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
//     var len=names.length;
//     var v=Math.floor(Math.random()*len)+0;
//     return (names[v]+" is going to buy lunch today!");
    
    


// /******Don't change the code below*******/    
// }
