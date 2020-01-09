class Lion{
  constructor(name,hairColor){
    this.name=name;
    this.hairColor=hairColor;
  }
  logname(){
    console.log('Roar!!! I am',this.name);
  };
}
const goldenLion=new Lion('Mufasa','golden');
const redLion=new Lion('Scarlet','Red');
console.log(goldenLion);
console.log(redLion);
goldenLion.logname();
redLion.logname();
