# Selection Sort

This small program takes in input in the form of an array of integers. It then performs a selection sort function on the array, returning the array sorted from smallest to largest.

## How It Works

This program works by taking in an array of integers and running it through a function: selectionSort. This function contains two other functions, which are defined at the beginning of the program: findMinIndexAndValue and sortSwitch.

### findMinIndexAndValue

This function finds the smallest integer and its index. It does this by comparing the starting index (which it will get from the selectionSort function) with the other integers in the array. The smallest one is assigned to the variable 'minVal'. The index of the smallest integer is assigned to the variable 'minIndex'. The 'minIndex' variable is returned at the end of the function, to be used later.

### sortSwitch

This function switches the places of the integers in an array, so that the smallest integer comes first. It does this by taking in the first index and second index as arguments, then switching the placement of the two within the array. This function is only called in the selectionSort function if the value of the first index is bigger than the value of the second index.

### selectionSort

This function begins by initializing the variable 'min'. The smallest integer will be assigned to this variable. Then, the function iterates over the array, assigning the 'min' variable to the output of the function findMinIndexAndValue for that iterator. Finally, the function sortSwitch is called, with the array, the current iterator, and the smallest integer being passed in as arguments.
