let starting_letters = ['S', 'T', 'F', 'G', 's', 't', 'f', 'g']
//for nric starting with S or T
let check_sum1 = ['t', 'T', 'g', 'G']]
let dict1 = {0:'J', 1:'Z', 2:'I', 3:'H', 4:'G', 5:'F', 6:'E', 7:'D', 8:'C', 9:'B', 10:'A'}
//for nric starting with F or G
let dict2 = {0:'X', 1:'W', 2:'U', 3:'T', 4:'R', 5:'Q', 6:'P', 7:'N', 8:'M', 9:'L', 10:'K'}
let sum_n = 0
let rem = 0
function nric_checker(text){
    adjusted_text = toUpperCase(text)
    if text.length != 9 {
        return "Invalid Length"
    }
    if text(0,1).includes(starting_letters) == False {
        return "Invalid First Letter"
    }
    function check_sum(text){
        sum_n = Number(text[0])*2 + Number(text[1])*7 +
                Number(text[2])*6 + Number(text[3])*5 +
                Number(text[4])*4 + Number(text[5])*3 +
                Number(text[6])*2 
        if text(0,1).includes(check_sum1){
            sum_n = sum_n + 4
        }
        rem = sum_n % 11
        if adjusted_text(0,1) == 'S'{
            if dict1[rem] == adjusted_text(-1,-2){
                return "Valid NRIC" 
            }else {
                return "Invalid nric checksum"
            }
        }
        if adjusted_text(0,1) == 'T'{
            if dict1[rem] == adjusted_text(-1,-2){
                return "Valid NRIC" 
            }else {
                return "Invalid nric checksum"
            }
        }
        if adjusted_text(0,1) == 'F'{
            if dict2[rem] == adjusted_text(-1,-2){
                return "Valid NRIC" 
            }else {
                return "Invalid nric checksum"
            }
        }
        if adjusted_text(0,1) == 'G'{
            if dict2[rem] == adjusted_text(-1,-2){
                return "Valid NRIC" 
            }else {
                return "Invalid nric checksum"
            }
        }
        return check_sum1(text)
    }
}
function nricS_checker(textS){
    output_shown = ''
    for(let i = 0; i < textS.length; i++){
        output_shown = "Nric: " + textS + "Status: " + nric_checker(text[i])

    }
}



