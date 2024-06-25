const Professor = {
    profName : 'Aditi dilip Jagtap',
    profDesign : 'Head of Department',
    profEmail : 'aditijagtap@gmail.com',
    profQualification : 'M_Phill PHD',
    profEmpId: '10022',

    degrees: {
        engineering : "CSC",
        PHD : "Advance computing",
        Master : "Artificial Intelligence",
        
    },

    certificates:['National Board Certification',
        'Certified Special Education Teacher','IT Information Library Foundations Certification',
        'Certified Professional Human Resource (IPMA-CP)'],

   
};

console.log("===Add property===");
 Professor.totalExperience = "14years";
console.trace(Professor);

console.log("==Update property===");
Professor.profEmpId = "20002";
console.log(Professor);

console.log("==add new certificate==");
Professor.certificates.splice(2,0,'Oracle Certified');
console.log(`add new certificate: ${Professor.certificates}`);

console.log("==Last element of Array==");
var lastval = Professor.certificates.pop();
console.log(lastval);