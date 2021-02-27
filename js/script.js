//the number of cara
function CharacCount(str) {
    var totalSoFar = 0;
    for (var i = 0; i < CharacCount.length; i++){
      // if (str(i) === " ") { // if a space is found in str
      //   totalSoFar = +1; // add 1 to total so far
      if ( str.charAt(i) === ""){
        totalSoFar = +1; 
      }return totalSoFar
    }
    }
    
    console.log(CharacCount("hello world"));
    //The number of words.
    // function WordCount(str) { 
    //   if(str.length)
    //   return str.split(" ").length;
    // }
    
    // console.log(WordCount("hello world"));