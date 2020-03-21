//when we call a function we can set as its arguments the ordinary stuffs like values as well functions that performs some action
//for example:
  document.querySelector('h1').addEventListener("click",function(){
    alert('I got clicked');
  });
  //where addEventListener is the higher order function and the function passed inside is called callback function
  
  
  
  //the other way round is:
  document.querySelector('h1').addEventListener("click",function_name) // no paranthesis coz for passing an input that is to
    alert('I got clicked');                                                                    //be called back 
    });                                                                    //at a later time not when the event listener is added
                                                                        //but on click
  function function_name(){
    alert('hello');
  }

//workink around objects and their behaviours
  
