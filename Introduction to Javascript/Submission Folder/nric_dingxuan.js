function is_nric(text) {
    let test1 = ['J','Z','I','H','G','F','E','D','C','B','A']
    let test2 = ['X','W','U','T','R','Q','P','N','M','L','K']
    
    if (text.length != 9) {
        return "Invalid Length"
    }
    if (text[0].toUpperCase() == "S" || text[0].toUpperCase() == "T" || text[0].toUpperCase() == "G" ||
    text[0].toUpperCase() == "F") {
        let num_str = text.slice(1,8)
        let num_list = []
        for (let i in [...Array(7).keys()]) {
            num_list.push(parseInt(num_str[i]))
        }
        let sum_n = num_list[0]*2 + num_list[1]*7 + num_list[2]*6 + num_list[3]*5 + num_list[4]*4 + num_list[5]*3 + num_list[6]*2
        if (text[0].toUpperCase() == "T" || text[0].toUpperCase() == "T") {
            sum_n += 4
        }
        let rem = sum_n % 11
        if (text[0].toUpperCase() == "T" || text[0].toUpperCase() == "T") {
            if (test1[rem] == text[-1]) {
                return "Valid"
            } else {
                return "Invalid NRIC checksum"
            }
            
            if (str.toUpperCase(text[0]) == "F" || str.toUpperCase(text[0]) == "G") {
                if (test2[rem] == text[-1]) {
                    return "Valid"
                } else {
                    return "Invalid NRIC checksum"
                }
            }
        } 
    
    
    } else {
        return "Invalid First Letter" + text[0]
    }

}
