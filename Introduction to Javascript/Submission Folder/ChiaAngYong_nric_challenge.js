function nrics_checker(nric_away) {

  for (let i = 0; i < nric_away.length; i++) {
    if (nric_away[i].length < 9) {
      console.log("Invalid Length"); // Check Length of String First
    }
    else if(!['T','t','G','g','F','f','S','s'].includes(nric_away[i][0])){
    	console.log("Invalid First Letter"); // Check First Letter Next
    }
    else if (check_special_num(nric_away[i].toUpperCase())){
    console.log("Valid NRIC"); // Check Special Num 
    }		// Make sure nric_away is upper case so can compare easily
    else{
    console.log("Invalid NRIC Checknum");
    }  // Invalid if any conditions are wrong
  }
}
function check_special_num(x){

	var dict1 = { 0: 'J', 1: 'Z', 2: 'I', 3: 'H', 4:'G', 5:'F', 6:'E',
  7:'D', 8:'C', 9:'B', 10:'A'
	};//key:value
	var dict2 = { 0: 'X', 1: 'W', 2: 'U', 3: 'T', 4:'R', 5:'Q', 6:'P',
  7:'N', 8:'M', 9:'L', 10:'K'
 	};//key:value
  
	seven_sum = 2 * parseInt(x[1]) + 7 * parseInt(x[2]) + 6 * parseInt(x[3])
  + 5 * parseInt(x[4]) + 4 * parseInt(x[5]) + 3 * parseInt(x[6]) 
  + 2 * parseInt(x[7]);

  special_num= seven_sum % 11; 
  // Find the number corresponding to dict value 

  if (x[0]=='S'){
  	return (x[8]==dict1[special_num]); 
  }//compare w dict1 for its value
	if (x[0]=='T'){
  	return (x[8]==dict1[special_num+4]); 
  }//compare w dict1 for its value after adding 4 to its key
  if (x[0]=='F'){
  	return (x[8]==dict2[special_num]);
  }//compare w dict1 for its value
  if (x[0]=='G'){
  	return (x[8]==dic21[special_num+4]);
  }//compare w dict1 for its value after adding 4 to its key

}

nrics_checker(['awr','s3353379i','twefsf','T0677228A','S1038475A','T1765643G']);
