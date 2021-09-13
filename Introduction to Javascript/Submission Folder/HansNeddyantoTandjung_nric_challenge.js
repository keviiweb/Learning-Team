const nrics_checker = ['awr','s3353379i','twefsf','T0677228A','S1038475A','T1765643G']
nrics_checker.forEach(nric_checker)


function nric_checker(old_nric) {
	const nric = old_nric.toLowerCase()
  	console.log(nric)
	if (nric.length != 9) {
  	console.log('Invalid length')
  }
  else if (!['s','t','f','g'].includes(nric[0])) {
  	console.log('Invalid first letter')
  }
  else {
  	var sum = nric[1]*2 + nric[2]*7 + nric[3]*6 + nric[4]*5 + nric[5]*4 + nric[6]*3 + nric[7]*2;
    if (nric[0] == 't' || nric[0] == 'g') {
    	var sum = sum + 4
    }
    const remainder = sum % 11
    
    const arr_st = {"j":0, "z":1, "i":2, "h":3,"g":4,"f":5,"e":6,"d":7,"c":8,"b":9,"a":10}
    const arr_fg = {"x":0, "w":1, "u":2, "t":3,"r":4,"q":5,"p":6,"n":7,"m":8,"l":9,"k":10}
    
    if (['s', 't'].includes(nric[0])) {
    	const checker = nric[8] 
    	if (arr_st[checker] == remainder) { 
      	console.log('Valid nric')
        }
      else {
      	console.log('Invalid nric checksum')
      }
     }
    else {
    	const checker = nric[8]
      if (arr_fg[checker] == remainder) {
      	console.log('Valid nric')
      	}
      else {
      	console.log('Invalid nric checksum')
      }
    }
  }
}
