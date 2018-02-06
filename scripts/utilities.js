// Function for looping through an array to execute a function on each element.
function forEach(array, handler) {
  for (var i = 0; i < array.length; i++) {
    handler(array[i], i);
  }
}

// Function to pad a number with the zeros until it is as many characters long as desired.
function numberPad(number, digits = 0) {
  var string = number.toString(),
      i;
  for (i = 0, digits -= string.length; i < digits; i++) {
    string = "0" + string;
  }
  return string;
}

// Function for converting the query param.
function getHtmlQueryAsJson () {
  var query = location.search.substring(1),
      params = query.split('&'),
      paramLength = params.length,
      i,
      split,
      result = {};
  for (i = 0; i < paramLength; i++) {
    split = params[i].split('=');
    result[split[0]] = split[1];
  }
  return result;
}

// Function to get the first parent of the provided element that has the provided class name. If there are no matches, null is returned.
function getFirstParentByClassName (element, className) {
  if (element && !element.classList.contains(className)) {
    element = getFirstParentByClassName(element.parentElement, className);
  }
  return element;
}
