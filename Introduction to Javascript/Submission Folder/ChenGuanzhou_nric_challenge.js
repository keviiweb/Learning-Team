var dict1 = { 0: "J", 1: "Z", 2: "I", 3: "H", 4: "G", 5: "F", 6: "E", 7: "D", 8: "C", 9: "B", 10: "A",};
var dict2 = { 0: "X", 1: "W", 2: "U", 3: "T", 4: "R", 5: "Q", 6: "P", 7: "N", 8: "M", 9: "L", 10: "K",};
function nric_checker(nric){
        if (nric.length != 9) {
            return "Invalid length";
        }
        if (!(nric[0].toUpperCase() == "T" || "S" || "F" || "G")) {
            return "Invalid first letter";
        }

    function nric_algo(nric){
            let sum = parseInt(nric[1])*2 + parseInt(nric[2])*7 + parseInt(nric[3])*6 + parseInt(nric[4])*5 + parseInt(nric[5])*4 + parseInt(nric[6])*3 + parseInt(nric[7])*2;
            nric[0] == "T" || nric[0] == "G" ? sum += 4 : sum;
            const remainder = sum % 11;

            if (nric[0] == "T" || nric[0] == "S") {
                return dict1[remainder] == nric[8];
            }
        
            else {
                return dict2[remainder] == nric[8];
            }
    }

    return nric_algo(nric)
           ? "Valid nric"
           : "Invalid checksum";
}

function nrics_checker(nrics)    {
    for (var nric of nrics) {
        console.log("nric " + nric + " status: ") + console.log(nric_checker(nric.toUpperCase()));
    }
}


nrics_checker(["awr","s3353379i","twefsf","T0677228A","S1038475A","T1765643G",]);