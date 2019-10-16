var fruits = ["Banana", "Orange", "Apple", "Mango"];
var string = "How are you doing today?";

function joinMethod(array) {
    var result = array.join(" and ");
    document.getElementById("joinResult").innerHTML += "var result = fruits.join(\"and\");" + "</br>" + "result => \"Banana and Orange and Apple and Mango\";";
}
function toStringMethod(array) {
    var result = array.toString();
    document.getElementById("toStringResult").innerHTML += "var result = fruits.toString();" + "</br>" + "result => \"" + result + "\";";
}
function splitMethod(string) {
    var result = string.split(" ");
    document.getElementById("splitResult").innerHTML += "var result = string.split(\" \");" + "</br>" + "result => [\"How\", \"are\", \"you\", \"today?\"];";
}

//OTHER EXAMPLES
// join method
function useJoinArrayMethod() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.join();
    return result;
  }
  
  function useJoinArrayMethod2() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.join(" and "); //and - separator
    return result;
    //returns this result: "Banana and Orange and Apple and Mango"
  }
  
  //toString Method
  function useToStringMethod() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.toString();
    return result;
    //returns "Banana, Orange, Apple, Mango"
  }

  //number to string
  function useToStringNumsInArray(){
      var array = [1,2,3];
      var result = array.toString();
      return result;
      //will return "1,2,3"
  }
  
  
  //split method
  //Split a string into an array of substrings:
  function useSplitMethod() {
    var string = "How are you today?";
    var result = string.split(" "); 
    return result;
    //returns ["How", "are", "you", "today?"]
  }
  
  //Omit the separator parameter - this will not change the initial 
  function useSplitMethod2() {
    var string = "How are you today?";
    var result = string.split(); 
    return result;
    //returns  ["How are you today?"]
  }
  
  //Separate each character, including white-space:
  function useSplitMethod3() {
    var string = "How are you today?";
    var result = string.split(""); 
    return result;
    //returns ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "t", "o", "d", "a", "y", "?"]
  }
  
  //Use the limit parameter:
  function useSplitMethod4() {
    var string = "How are you today?";
    var result = string.split(" ", 2); 
    return result;

  }
  
  //Use a letter as a separator:
  function useSplitMethod5() {
    var string = "How are you today?";
    var result = string.split("o"); 
    return result;
  }
  
  
  
  
  
  
  
  

