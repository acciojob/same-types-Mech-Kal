function isSameType(value1, value2) {
  // Convert numeric strings to numbers when possible
  const num1 = Number(value1);
  const num2 = Number(value2);

  const val1 = value1 === "" ? value1 : isNaN(num1) ? value1 : num1;
  const val2 = value2 === "" ? value2 : isNaN(num2) ? value2 : num2;

  // Check if both are NaN
  if (Number.isNaN(val1) && Number.isNaN(val2)) {
    return true;
  }

  // Compare types
  return typeof val1 === typeof val2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
