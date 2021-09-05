function NRIC_check(x){
    
    var nric = x.toLowerCase();
// checking if the NRIC length is correct
    if (nric.length !== 9) {
        return 'Invalid Length';
    }

    var nric_char = nric.split('');
    var first_letter = ['s', 't', 'f', 'g'];
// checking if the first NRIC character is correct
    if (first_letter.indexOf(nric_char[0]) === -1) {
        return 'Invalid first letter';
    }

    else {
// tabulating sum of the NRIC digits
        var total_sum = nric_char[1]*2 +
                        nric_char[2]*7 + 
                        nric_char[3]*6 +
                        nric_char[4]*5 +
                        nric_char[5]*4 +
                        nric_char[6]*3 +
                        nric_char[7]*2;
                        
                        
function final_check(x) {
// finding remainder from sum of NRIC digits
            function final_r(x) {
                return x === 't' || x === 'g' ?
                       (total_sum + 4) % 11 :
                        total_sum % 11; 
            }

// comparing remainder to list to derive the supposed last alphabet
            if (x === 's' || x === 't') {
                return final_r(x) === 0 ? 'j' 
                     : final_r(x) === 1 ? 'z'
                     : final_r(x) === 2 ? 'i'
                     : final_r(x) === 3 ? 'h'
                     : final_r(x) === 4 ? 'g'
                     : final_r(x) === 5 ? 'f'
                     : final_r(x) === 6 ? 'e'
                     : final_r(x) === 7 ? 'd'
                     : final_r(x) === 8 ? 'c'
                     : final_r(x) === 9 ? 'b'
                     : 'a';
             }

             else {
                return final_r(x) === 0 ? 'x' 
                     : final_r(x) === 1 ? 'w'
                     : final_r(x) === 2 ? 'u'
                     : final_r(x) === 3 ? 't'
                     : final_r(x) === 4 ? 'r'
                     : final_r(x) === 5 ? 'q'
                     : final_r(x) === 6 ? 'p'
                     : final_r(x) === 7 ? 'n'
                     : final_r(x) === 8 ? 'm'
                     : final_r(x) === 9 ? 'l'
                     : 'k';
          }
}


          return final_check(nric_char[0]) === nric_char[8] ?
          'Valid NRIC' : 'Invalid NRIC checksum';
    

    }
}

console.log(NRIC_check('T1765643G'));