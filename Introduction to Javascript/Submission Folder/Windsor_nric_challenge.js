function nric_checker(x){
    if (x.length != 9){
        console.log('Invalid length')
    } 
    else if(!(['s','S','t','T','f','F','g','G'].includes(x[0]))){
        console.log('Invalid first letter')
    }
    else if (checkSum(x)){
        console.log('Valid nric')
    } else 
    console.log('Invalid nric checksum')
}
function checkSum(x){
    sum = 2*parseInt(x[1]) + 7*parseInt(x[2]) + 6*parseInt(x[3]) + 5*parseInt(x[4]) + 4*parseInt(x[5]) + 3*parseInt(x[6]) + 2*parseInt(x[7])
    //check if input has nric format
    if (!(Number.isInteger(sum))){
        return false
    }
    if (['t','T','g','G'].includes(x[0])){
        sum += 4
    } 
    remainder = sum%11
    const arr1 = {"J":0, "Z":1, "I":2, "H":3,"G":4,"F":5,"E":6,"D":7,"C":8,"B":9,"A":10}
    const arr2 = {"X":0, "W":1, "U":2, "T":3,"R":4,"Q":5,"P":6,"N":7,"M":8,"L":9,"K":10}
    if (['t','T','s','S'].includes(x[0])){
        alphabet = x[8].toUpperCase()
        if (arr1[alphabet] == remainder){
            return true
        }
    } else if (arr2[alphabet] == remainder){
        return true
    }
    return false
}

// // Test cases:
// nric_checker('ffjf')
// nric_checker('gfjffgggg')
// nric_checker('S3353379I')
// nric_checker('T0677228A')
// nric_checker('S1038475A')
// nric_checker('T1765643G')