const raining = true;
const cold = false;
const temperature = -5;

if(raining){
  console.log("Don't forget your umbrella!")
}
if(cold){
  console.log("Make sure you pick out a scarf!");
}

if(temperature<0){
  console.log("Make sure you pick out a scarf!");
}else if(temperature<15){
  console.log("Short sleeves won't cut it!");
}else{
  console.log("Short sleeves are fine.")
}



console.log("Now you're ready to go outside!");

//-----LOGICAL OPERATORS----------
const isCitizen =true;
const age = 26;

if(isCitizen && age>18){ //Logical AND 
  console.log("You are eligible to vote.");
}

if(temperature<-40 || temperature>40){ //Logical OR
  console.log("May be going outside isn't such a great idea!")
}

if(!raining){ //Logical NOT
  console.log("Leave your umbrella at home!");
}