let firstObj = {
    name: "okkes",
    surname:"akkurt",
    age:28,
    bestFriend:"Av. Alp Eren TURK",
    printName:()=> name + " " + surname

}



console.log(firstObj);
/*
let nameAndSurnameStringfy = JSON.stringify(firstObj,(key,value)=>{
    console.log(key);
    if(key === 'name' || key === 'surname')
        return value;
    else
        return undefined;

})

console.log("value : ",nameAndSurnameStringfy);*/

let jsonFormattedObj = JSON.stringify(firstObj);

console.log(jsonFormattedObj);

let parsedJson = JSON.parse(jsonFormattedObj);

console.log(parsedJson);

console.log(JSON.stringify([1,2,3,{sa:"5"},5,6,7]));



console.log(` ${15} serlam`);



