/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.
*/

/*
examples
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
*/

//solution
function moreZeros(s){
    //split string into array
    let str = [...s]
    //convert all letters to binary
    str = str.map(letter => letter.charCodeAt().toString(2))
    //check for more zeros than ones in each letter
    let result = []
    str.forEach((binary,index) => {
      let zeroCount = [...binary].filter(digit => digit==="0").length
      if((zeroCount - (binary.length - zeroCount)) > 0 && !result.includes(s[index])){
        result.push(s[index])
      }
    })
    return result
    
  }