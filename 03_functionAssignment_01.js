console.log("===========Wikipedia information function with no arguments and no return value===============");
function showNick(){
    console.log("1. Nicholas James Vujicic born 4 December 1982)is an Australian-American Christian evangelist and motivational speaker of Serbian descent. Vujicic has tetra-amelia syndrome, a disorder characterised by the absence of arms and legs.")
}
showNick();

function showKaroly(){
    console.log("2. Károly Takács was the first shooter to win two Olympic gold medals in the 25 metre rapid fire pistol event, both with his left hand after his right hand was seriously injured.")
}
showKaroly(); 

console.log("============function with arguments and no return value==========");

function personalDetails(firstName,lastName,collageName){
    console.log("First name is :" ,firstName);
    console.log("Last name is:",lastName);
    console.log("Collage name is:",collageName);
}
personalDetails("Dhanashree", "Jadhav", "Bharatividyapeeth");

console.log("========step3=======");
function addThreeValues(first,second,third)
{
   
    var result = first + second + third;
    console.log("addition of three no. is:", result)
}
addThreeValues(10.23,600,40);

function addString(a,b,c)
{
    var result= a+b+c;
    console.log("addition of string is:",result)
}
addString("Hello ","Good ","Morning");