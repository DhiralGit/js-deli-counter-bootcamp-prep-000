var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number " +katzDeliLine.length+ " in line.";  
};

function nowServing() {
  if(katzDeliLine === undefined || katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var temp;
    temp = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently" +name+ "served";
  }
}