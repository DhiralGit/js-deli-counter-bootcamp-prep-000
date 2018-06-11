var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number " +katzDeliLine.length+ " in line.";  
}

function nowServing() {
  if (undefined === katzDeliLine ) {
     return "There is nobody waiting to be served!";
  }
  else {
    var temp= katzDeliLine.shift();
    return "Currently serving " +temp;
  }
}