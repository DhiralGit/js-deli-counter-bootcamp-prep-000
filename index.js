var katzDeli = [];
var katzDeliLine = katzDeli.length;

function takeANumber(personName){

  katzDeli.push(personName);
  
  return "Welcome,"+katzDeli[katzDeli.length - 1]+". You are number";  
};