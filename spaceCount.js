
function spaceCount (str){
    let count = 0;
    for (let i=0;i < str.length; i++) {
        if(str[i]==" "){
            count = count + 1;
        }
    };
       console.log(`no of spaces in given string:${count}`); 
    }
    spaceCount("Revision is the mother of success");
    spaceCount("Javascript is the language of internet world");
