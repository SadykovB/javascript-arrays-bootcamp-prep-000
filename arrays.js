var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (massiv, elem) 
{
  var empty = [5];
  empty = massiv.unshift(elem)
}

function destructivelyAddElementToBeginningOfArray(massiv, elem) 
{
  massiv = massiv.unshift(elem)
}