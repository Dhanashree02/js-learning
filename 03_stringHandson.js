var mystring = "  Hey you are doing good, keep it up   ";
console.log(`given string is:${mystring}`);

function stringHandson(){
    var result = mystring.length;
    console.log(`count of the character in given string is:${result}`);

    var trimme = mystring.trim(" ");
    console.log(`string after using trim is:${trimme}`);

    var trimresult = trimme.length;
    console.log(`count of trimmed string is:${trimresult}`);

    var remcount = result - trimresult;
    console.log(`extra spaces count is:${remcount}`);

    var firstchar = trimme.slice(0,1)
    console.log(`first character is:${firstchar}`);

    var lastchar = trimme.slice(-1)
    console.log(`last character is:${lastchar}`);

    var totalwords = trimme.split(" ");
    console.log(`total no of words is:${totalwords.length}`);

    var charindex = trimme.indexOf("good")
    console.log(`index of good is:${charindex}`);

    var substringchar = trimme.substring(22)
    console.log(`substring from index 22:${substringchar}`);

    var checkendswith = trimme.endsWith("up");
    console.log(`string ends with up is:${checkendswith}`);

    console.log(`string start with Hey is:${trimme.startsWith("Hey")}`);

}stringHandson();
