function isSameType(value1, value2) {
  // Convert to actual values (prompt always returns string)
  const v1 = Number(value1);
  const v2 = Number(value2);

  const val1 = isNaN(v1) ? value1 : v1;
  const val2 = isNaN(v2) ? value2 : v2;

  // Explicitly handle NaN
  const bothNaN = Number.isNaN(val1) && Number.isNaN(val2);
  const oneNaN = Number.isNaN(val1) || Number.isNaN(val2);

  if (bothNaN) return true;
  if (oneNaN) return false;

  // Compare types
  return typeof val1 === typeof val2;
}

// do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
