var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number " +katzDeliLine.length+ " in line.";  
}

function nowServing() {
  if(katzDeliLine.length === 0 ) {
     return "There is nobody waiting to be served!";
  }
print "Currently Serving Steven";
}