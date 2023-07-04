function scuberGreetingForFeet(){
  console.log(scuberGreetingForFeet(200)); // Output: This one's on us!
console.log(scuberGreetingForFeet(1000)); // Output: That will be $30.
console.log(scuberGreetingForFeet(3000)); // Output: Sorry, we can't provide a ride for more than 2500 feet.
console.log(scuberGreetingForFeet(1500)); // Output: Welcome to Scuber.
    
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one's on us!";
  } else if (feet > 400 && feet <= 2000) {
    return "That will be $30.";
  } else if (feet > 2000 && feet <= 2500) {
    return "Sorry, we can't provide a ride for more than 2500 feet.";
  } else {
    return "Welcome to Scuber.";
  }
}

}

function ternaryCheckCity(){
  console.log(ternaryCheckCity("NYC")); // Output: Ok, sounds good.
console.log(ternaryCheckCity("LA")); // Output: No go.
     
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
}


function switchOnCharmFromTip(){
  console.log(switchOnCharmFromTip('generous')); // Output: Thank you so much.
console.log(switchOnCharmFromTip('not as generous')); // Output: Thank you.
console.log(switchOnCharmFromTip('average')); // Output: Bye.
   
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
      default:
        return "Bye.";
    }
      
  }
}
