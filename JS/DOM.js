
const myButton = document.getElementById('btn');
const name = document.getElementById('name');
//const surname = document.getElementsByClassName('surname');
const surname = document.querySelector('.surname');
const container = document.querySelector('.container');



console.log(myButton);
console.log(surname);
console.log(container.innerHTML);
container.innerHTML = "<button id=\"btn\">Click Me</button>";
console.log(container.innerHTML);//is it gonna work or not

console.log("Deneme 1-2-3");



myButton.addEventListener('click',(event)=>{
  alert(`${name.value} -> ${surname.value}`);
  name.value = "";
  name.style.backgroundColor = "red";
  name.style.borderRadius = "25px";

  console.log(name);
  name.classList.add("highlight");
  console.log(name);
  name.classList.remove("highlight");

  name.className = "Selam selam"



})





/*
3 input olsun ve bir myButton
buttona basinca 2 inputun cssi degissin, 1 inputa classi eklensin ve cssi degissin.
bunlara ek alert olarak input valuelari printlensin.
input alanlari bosaltilsin.
son olarak ekrana extra bir input gelsin.
*/



/*
3 input olsun ve bir myButton

<ol>
li

</ol>


*/
