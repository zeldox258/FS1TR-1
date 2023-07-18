function calculator(callBack, num1, num2) {
  return callBack(num1, num2);
}

let add = (a, b) => a + b;
let subs = (a, b) => a - b;
let div = (a, b) => a / b;
let mult = (a, b) => a * b;

console.log(calculator(mult, 8, 4));

/*

Write a function called repeatHello, which will take as parameter a callback. 
The callback function will simply print "Hello". 
The repeatHello function will have to execute the callback function with an interval of 1 second. 
The callback function must be an arrow function, can you also explain why?



*/

function repeatHello(okkesAdamdir,stopOkkesAdamdir) {
  const Interval = setInterval(() => {
    okkesAdamdir();
  }, 1000);
  stopOkkesAdamdir(Interval);

}

repeatHello(()=>{console.log("Hello Okkes Abi")},(Interval)=>{
    setTimeout(()=>{
        clearInterval(Interval);
    },5000)
});


//convertToJson as a parameter jsonConverter function and obj
//json converter arrow function, it will take object as a parameter then convert that object to
//json string and return it



function convertToJson(jsonConverter,obj) {
    return jsonConverter(obj);
}

console.log(convertToJson(
    (obj)=>JSON.stringify(obj),
    {a:"5",b:7}
    ))