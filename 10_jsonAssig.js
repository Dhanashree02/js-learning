const employeeJson = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age": 23,
    "doj" : "11-12-2019",
    "Married" : false,
    "address" : {
        "street" : "32, Laham st.",
        "city" : "Innsbruck",
        "country" : "Austria" 
    },
    "referred by" : "E0012"
}`;

console.log("=== json.parse ===");
const newJsonObj = JSON.parse(employeeJson);
console.log(newJsonObj);

console.log("=== role dev ===");
console.log(`employee role:,${newJsonObj.role(1)}`);