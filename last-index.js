function lastIndexOf(array, value) {     //--------step 2----- the argument from line 23 is hoisted into the lastIndexOf function
  
  if (array.length === 0) {        //----step 3-----checks if the array length is valid
    
    return -1;                     //--------------if not returns -1 
  
  }
                                               //--------step 4----the program moves to the for loop
  for (let i = array.length - 1; i >= 0; i--) {   //------step 5---i is our starting point which is the array length - 1 because indexes start at 0, as long as i is greater than or equal to 0
    
    if (array[i] === value) { //----step 6----checks if our value parameter (eg 2) is on the array
      
      return i;   //----step 7---if the value is on the array code will return its position in the array - 1 so the 5th block returns 4
    
    } else {
    
         
    }    
  
  }  
  return -1;//----step 8---if the value is not on the array it will return -1
}

console.log(lastIndexOf([ 5, 5, 5], 5));//--------------step 1--------------sends the array and a number to check against it as the arguments in lastIndexOf(array, value) on line 1


  
