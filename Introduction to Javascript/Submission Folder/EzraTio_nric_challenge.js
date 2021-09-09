function nric_checker(nric) {
  var sum = 0;
  var dict1 = { 0: "J", 1: "Z", 2: "I", 3: "H", 4: "G", 5: "F", 6: "E", 7: "D", 8: "C", 9: "B", 10: "A",};
  var dict2 = { 0: "X", 1: "W", 2: "U", 3: "T", 4: "R", 5: "Q", 6: "P", 7: "N", 8: "M", 9: "L", 10: "K",};
  var splitted = nric.split("");
  if (splitted.length != 9) {
    return "Invalid length";
  }
  sum = parseInt(splitted[1]) * 2 + parseInt(splitted[2]) * 7 + parseInt(splitted[3]) * 6 + parseInt(splitted[4]) * 5 
      + parseInt(splitted[5]) * 4 + parseInt(splitted[6]) * 3 + parseInt(splitted[7]) * 2;

  if (splitted[0] == "T" || splitted[0] == "S") {
    sum += 4;
    if (dict1[sum % 11] != splitted[8]) {
      return "Invalid nric checksum";
    }
  } else if (splitted[0] == "F" || splitted[0] == "G") {
    if (dict2[sum % 11] != splitted[8]) {
      return "Invalid nric checksum";
    }
  }
  return "Valid nric";
}

function nrics_checker(nric_array) {
  nric_array.forEach((element) => {
    console.log(`Nric: ${element} Status: ${nric_checker(element)}`);
  });
}

nrics_checker(["awr","s3353379i","twefsf","T0677228A","S1038475A","T1765643G",]);
