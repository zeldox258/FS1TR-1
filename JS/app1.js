let a, b , rest,c;
[a,b] = [10,20,30 ,40 ,50];

console.log(a,b,rest);

[a,b,...rest] = [10,20,30,40,50,60,70,80,90,100,110,120];

console.log(a,b,rest);


[a,b,c,...rest] = [10,20,30,40,50,60,70,80,90,100,110,120];

console.log(a,b,rest,c);


let arr = [1,2,3,4,5,6,7,8,9,10];
[a , ...rest] = arr;
console.log(rest);

arr = rest;

console.log(arr);
 
arr[5] = 99;
console.log(rest);


const obj = {g:1,h:2};

const {g,h} = obj;
console.log(g,h);

//arr = [...rest,5]

const obj2 = {ao:1,bo:{co:2}}

const{ao:s,bo:{co}}=obj2

console.log(s,co);


const obj3 = {a:{b:{c:{d:5}}}}
const{a:{b:{c:{d:q}}}} = obj3;
console.log(q);


const numbers = [];
({g:numbers[0],h:numbers[1]} = obj);
console.log(numbers);

let arrrr = []
let okkes;
[okkes = 1] = arrrr;

console.log(arrrr[0]);


let {alp = 2} = {alp:undefined};
let {sergen = 4} = {sergen:null};


let {omer = console.log("hey")} = {omer:2};


console.log(okkes,alp,sergen,omer);


const{omer1,...omer2} = {omer1:1,omer2:2,omer3:3}

console.log(omer1,omer2);//1 [2,3] omercan, HATA okkes, 


const{aa,bb,cc,dd,...zzz} = {aa:5,cc:6,dd:9,zz:89,kk:99,polat:98,bb:8989}

console.log(aa,bb,cc,dd,zzz);











