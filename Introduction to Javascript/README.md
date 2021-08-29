# Learning-Team
### Introduction to Javascript

The Web Application curently uses React (frontend) and Node+Express (backend).
This short exercise aims to provide you with the basic JS syntax knowledge so that you can help out with the project in the future.

### Setting up
We highly recommend using **Visual Studio Code** as this is the default IDE the team is using, but you are free to use any editor you like.
Guide to installation: https://code.visualstudio.com/

If you have trouble setting up, just ask for help :) 
or you can use an online editor for now: https://jsfiddle.net/

### Challenge #1: NRIC checker

Ever wondered how NRIC/FIN numbers are generated? Are they generated randomly using RNG? For those who don't know, NRIC numbers actually follow an algorithm. The first letter will be either 'S', 'T', 'F', or 'G', followed by a 7-digit serial number, and lastly a checksum letter. By calculating the checksum value, we can determine the validity of the given NRIC number.

> Multiply first digit by 2, second by 7, third by 6, fourth by 5, fifth by 4, sixth by 3, seventh by 2. Add the total together.
> If the first letter of the NRIC starts with T or G, add 4 to the total.
> Divide the number by 11 and get the remainder. 
>  Depending on the type of IC, use the following to check if the last alphabet matches the remainder value you've calculated:
-If the IC starts with S or T: 0=J, 1=Z, 2=I, 3=H, 4=G, 5=F, 6=E, 7=D, 8=C, 9=B, 10=A
-If the IC starts with F or G: 0=X, 1=W, 2=U, 3=T, 4=R, 5=Q, 6=P, 7=N, 8=M, 9=L, 10=K

Write a simple JS script to check for the validity of a given NRIC/FIN number.
This challenge will mainly test you on your understanding of the following concepts:
- if-else statements
- loops
- basic string methods
- basic arithmetic operators
- variable declaration
- objects (JSON)
- arrays
- functions

###### Checklist

Try to implement as many of these requirements as possible.
1) Your function should check if the NRIC is valid. If so, show `Valid nric`
2) If the NRIC is of incorrect length, show `Invalid length`
3) If the first letter of NRIC is incorrect, show `Invalid first letter`
4) If the NRIC is of the correct format but is invalid, show `Invalid nric checksum`

###### Example

Write a function *nric_checker(nric)* to take in a single NRIC number to check.
Function and input: `nric_checker('S0016274D')`
Expected output: `Valid nric`

Write a function *nrics_checker(nric_array)* to take in an array of NRIC numbers to check. You should use your function in the first part above.
Function and input: `nrics_checker(['awr','S3353379I','twefsf','T0677228A','S1038475A','T1765643G'])`
Expected output: 
`Nric: awr Status: Invalid length` 
`Nric: S3353379I Status: Valid nric` 
`Nric: twefsf Status: Invalid length` 
`Nric: T0677228A Status: Valid nric`
`Nric: S1038475A Status: Invalid nric checksum`
`Nric: T1765643G Status: Valid nric`

**DISCLAIMER: This is for learning only, do not use this for illegal purposes**
