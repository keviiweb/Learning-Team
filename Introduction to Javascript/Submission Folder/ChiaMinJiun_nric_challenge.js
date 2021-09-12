function nric_checker(nric) {

    if (nric.length != 9)   {
        return console.log("Invalid length");
    } else if (!["S", "T", "F", "G"].includes(nric[0].toUpperCase())) {
        return console.log("Invalid first letter")
    } else if (checksum(nric))  {
        return console.log("Valid nric");
    } else {
        return console.log("Invalid nric checksum")
    }
}

function checksum(nric) {
    total = 2*parseInt(nric[1]) + 7*parseInt(nric[2]) + 6*parseInt(nric[3]) + 5*parseInt(nric[4]) + 
    4*parseInt(nric[5]) + 3*parseInt(nric[6]) + 2*parseInt(nric[7]);

    nric[0].toUpperCase() == "T" || nric[0].toUpperCase() == "G"
    ? total += 4
    : total;

    remainder = total % 11;
    last_letter = nric[8].toUpperCase();

    const arr1 = {"J":0, "Z":1, "I":2, "H":3,"G":4,"F":5,"E":6,"D":7,"C":8,"B":9,"A":10}
    const arr2 = {"X":0, "W":1, "U":2, "T":3,"R":4,"Q":5,"P":6,"N":7,"M":8,"L":9,"K":10}
    
    if (["T", "S"].includes(nric[0].toUpperCase()))    {
        if (arr1[last_letter] == remainder) {
            return true;
        } else  {
            return false;
        }
    } else if (arr2[last_letter] == remainder)  {
        return true;
    } else  {
        return false;
    }
}  

function nrics_checker(nric_arr)    {
    for (var x of nric_arr) {
        console.log("nric " + x + " status: ") + nric_checker(x);
    }
}