var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number " +katzDeliLine.length+ " in line.";  
}

function nowServing() {
  if(katzDeliLine == null) {
     return "There is nobody waiting to be served!";
  }
  else (katzDeliLine.length !== 0 ); {
    var temp= katzDeliLine.shift();
    return "Currently serving " +temp;
  }
}