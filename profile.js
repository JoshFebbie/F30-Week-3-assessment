let color = document.getElementById("color")
let place = document.getElementById("place")
let ritual = document.getElementById("ritual")

function showColor() {
    alert("My favorite color is blue")
}
 
 function showPlace() {
    alert("My favorite place is Stamp Creek, Ga.")
 }

 function showRitual() {
    alert("My favorite ritual is my morning glass of water")
 }


 color.addEventListener("click", showColor)
 place.addEventListener("click", showPlace)
 ritual.addEventListener("click", showRitual)