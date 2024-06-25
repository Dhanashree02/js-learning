function maleMarriageEligibility(gender, age, boyName){
   var resultstr = (gender == "male" && age>=21) ? `hey ${boyName} you are eligible for marriage` : `${boyName} you are not eligible for marriage`;
     return resultstr;

}
var retresult = maleMarriageEligibility("male",40,"Billgates");
console.log(retresult);
var retresult = maleMarriageEligibility("male",17,"Stew jobs");
console.log(retresult);

function femaleMarriageEligibility(gender, age, girlName){
    var strfemale = (gender == "female" && age>=18) ? `hey ${girlName} You are eligible for marriage` : `${girlName} you are not eligible for marriage`; 
    return strfemale;
}
var retstr = femaleMarriageEligibility("female", 16, "jenifer");
console.log(retstr);
var retstr = femaleMarriageEligibility("female",27, "malinda gates");
console.log(retstr);