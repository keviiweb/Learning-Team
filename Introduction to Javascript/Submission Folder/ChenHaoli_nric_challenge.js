function nric_checker(nric){
    if (nric.length != 9){
        console.log("Invalid Length");
    }
    else if (!['s','S','t','T','f','F','g','G'].includes(nric[0])){
        console.log("Invalid first letter");
    }
    else if (nric_validity(nric) == false){
        console.log("Invalid nric checksum");
    }
    else if (nric_validity(nric) == true){
        console.log("Valid nric");
    }
}

function nric_validity(nric){
    first_digit = parseInt(nric[1])*2;
    second_digit = parseInt(nric[2])*7;
    third_digit = parseInt(nric[3])*6;
    fourth_digit = parseInt(nric[4])*5;
    fifth_digit = parseInt(nric[5])*4;
    sixth_digit = parseInt(nric[6])*3;
    seventh_digit = parseInt(nric[7])*2;
    sum = first_digit + second_digit + third_digit + fourth_digit + fifth_digit + sixth_digit + seventh_digit;
    if (['t','T','g','G'].includes(nric[0])){
        sum = sum + 4;
    }
    remainder = sum%11
    const stchecklist = { 0: "J", 1: "Z", 2: "I", 3: "H", 4: "G", 5: "F", 6: "E", 7: "D", 8: "C", 9: "B", 10: "A",};
    const fgchecklist = { 0: "X", 1: "W", 2: "U", 3: "T", 4: "R", 5: "Q", 6: "P", 7: "N", 8: "M", 9: "L", 10: "K",};
    if (['s','S','t','T'].includes(nric[0])){
        if (stchecklist[remainder] == nric[8].toUpperCase()){
            return true;
        }
        return false;
    }
    else if (['f','F','g','G'].includes(nric[0])){
        if (fgchecklist[remainder] == nric[8].toUpperCase()){
            return true;
        }
        return false;
    }
}

function nrics_checker(nric_array){
    for (let i = 0; i < nric_array.length; i++){
        console.log ('Nric: ' + nric_array[i] + ' Status: ' + nric_checker(nric_array[i]));
    }
}



