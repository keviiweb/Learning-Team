var nric_array = ['awr','s3353379i','twefsf','T0677228A','S1038475A','T1765643G'];
var arrayLength = nric_array.length;


function  nric_checker(nric){
    nric = nric.toUpperCase();

    first_letter = nric.charAt(0);
    last_letter = nric.charAt(8);

    first_digit = nric.charAt(1);             //Steps and calculations needed to check for validity
    second_digit = nric.charAt(2);
    third_digit = nric.charAt(3);
    fourth_digit = nric.charAt(4);
    fifth_digit = nric.charAt(5);
    sixth_digit = nric.charAt(6);
    seventh_digit = nric.charAt(7);
    
    first_digit*=2;
    second_digit*=7;
    third_digit*=6;
    fourth_digit*=5;
    fifth_digit*=4;
    sixth_digit*=3;
    seventh_digit*=2;
    
    total = first_digit + second_digit + third_digit + fourth_digit + fifth_digit + sixth_digit + seventh_digit;

    if (first_letter == "T" || first_letter == "G"){
        total+=4;
    }
    
    remainder= total%11;
    
    var ST = {0:"J", 1:"Z", 2:"I", 3:"H", 4:"G", 5:"F", 6:"E", 7:"D", 8:"C", 9:"B", 10:"A" };
    var FG = {0:"X", 1:"W", 2:"U", 3:"T", 4:"R", 5:"Q", 6:"P", 7:"N", 8:"M", 9:"L", 10:"K" };
    
    let y = "a";
    if(first_letter=="S"||first_letter=="T"){             //Finding out the checksum letter
        y = ST[remainder];
    }
    else if(first_letter=="F"||first_letter=="G") {
        y == FG[remainder];
    }
 

    if (nric.length != 9){                    //If the NRIC is of incorrect length, show Invalid length
        x = "Invalid Length";
     }
    else if(first_letter != "S" && first_letter != "T" && first_letter != "F" && first_letter != "G"){
        x= "Invalid first letter";            //If the first letter of NRIC is incorrect, show Invalid first letter
    }
    else if (last_letter == y){              //If the NRIC is valid. If so, show Valid nric
        x = "Valid nric";
    }
    else{                                     //If the NRIC is of the correct format but is invalid, show Invalid nric checksum
        x= "Invalid nric checksum";
    }
    
    
    return x;
    }

    


for (var i = 0; i < arrayLength; i++){    
     let x = nric_checker(nric_array[i]);
    console.log("Nric:"+ nric_array[i]+ "   Status:" + x );  

}

