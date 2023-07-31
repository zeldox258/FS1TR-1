const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const ol = document.createElement("ol");

document.getElementById("buton1").addEventListener("click", () => {
  if (input1.value == "" && input2.value == "" && input3.value == "") {
    alert("You must fill all the informations.")
  }
  else {
    document.body.appendChild(ol);
    const list = document.createElement("li");
    ol.appendChild(list);
    list.innerHTML = ${input1.value} ${input2.value} ${input3.value};
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }
});
