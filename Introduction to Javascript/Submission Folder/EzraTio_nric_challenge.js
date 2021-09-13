function nric_checker(nric) {
  var sum = 0;
  var dict1 = { 0: "J", 1: "Z", 2: "I", 3: "H", 4: "G", 5: "F", 6: "E", 7: "D", 8: "C", 9: "B", 10: "A", };
  var dict2 = { 0: "X", 1: "W", 2: "U", 3: "T", 4: "R", 5: "Q", 6: "P", 7: "N", 8: "M", 9: "L", 10: "K", };
  if (nric.length != 9) {
    return "Invalid length";
  }
  if (!['S','T','F','G'].includes(nric[0])) {
    return "Invalid first letter";
  }
  sum = parseInt(nric[1]) * 2 + parseInt(nric[2]) * 7 + parseInt(nric[3]) * 6 + parseInt(nric[4]) * 5 
        + parseInt(nric[5]) * 4 + parseInt(nric[6]) * 3 + parseInt(nric[7]) * 2;
  sum = nric[0] == "T" || nric[0] == "G" ? (sum += 4) % 11 : sum % 11;
  if (nric[0] == "T" || nric[0] == "S") {
    if (dict1[sum] != nric[8]) {
      return "Invalid nric checksum";
    }
  } else {
    if (dict2[sum] != nric[8]) {
      return "Invalid nric checksum";
    }
  }
  return "Valid nric";
}

function nrics_checker(nric_array) {
  nric_array.forEach((element) => {
    console.log(`Nric: ${element} Status: ${nric_checker(element.toUpperCase())}`);
  });
}

nrics_checker(["awr","s3353379i","twefsf","T0677228A","S1038475A","T1765643G",]);