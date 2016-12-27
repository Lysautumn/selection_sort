// will not run code until loaded
$(document).ready(function () {
  // function to find the minimum value and its index
  var findMinIndexAndValue = function (input, start) {
    var minVal = input[start];
    var minIndex = start;
    for (var iterator = minIndex + 1; iterator < input.length; iterator++) {
      if (input[iterator] < minVal) {
        minIndex = iterator;
        minVal = input[iterator];
      }
    }
    
    return minIndex;
  };

  // function to switch spots of values when sorting
  var sortSwitch = function (input, firstIndex, secondIndex) {
    var tempVar = input[firstIndex];
    input[firstIndex] = input[secondIndex];
    input[secondIndex] = tempVar;
  };

  // function to sort input using two functions above
  var selectionSort = function (input) {
    var min;
    for (var iterator = 0; iterator < input.length; iterator++) {
      min = findMinIndexAndValue(input, iterator);
      sortSwitch(input, iterator, min);
    }
  };

  var myInput = [32, 4, 11, 26, 5, 90, 300, 1, 82];

  selectionSort(myInput);

  alert(myInput);

});
