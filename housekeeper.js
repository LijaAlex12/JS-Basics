function HouseKeeper(yearOfExperience,name,cleaningRepertoire){
    this.yearOfExperience=yearOfExperience;
    this.name=name;
    this.cleaningRepertoire=cleaningRepertoire;
    //constructor function with name clean
    this.clean=function(){
        alert('cleaning in progress');
    };

    
}

//constructor function similar to
var audio=new Audio('sounds/kick-bass.mp3');
audio.play();
