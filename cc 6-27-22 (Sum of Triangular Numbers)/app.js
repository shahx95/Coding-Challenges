/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. >0.
R: integer
E: 
        [01]
        02 [03]
        04 05 [06]
        07 08 09 [10]
        11 12 13 14 [15]
        16 17 18 19 20 [21]

        sumTriangularNumbers(5) => 35 i.e. 1+3+6+10+15
P: 
    create a variable to store the sum and assign it a value of 0
    setup a while loop until n becomes less than 0:
        use the triangular numbers sequence formula to generate a number 
        add this number to the sum
        decrease n value by 1
    return sum    

*/


//solution
function sumTriangularNumbers(n) {
    //formula for sum of triangular numbers: n* (n+1)/2
    let sum = 0
    while(n>0){
      sum += n*((n+1)/2)
      n--
    }
    return sum;
  }