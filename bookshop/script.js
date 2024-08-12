var area = document.querySelector(".pop-area")
var box = document.querySelector(".pop-box")
var buttonpopup = document.getElementById("button-popup")
var cancelpop = document.getElementById("Cancel-button")

buttonpopup.addEventListener("click",function(){
    area.style.display = "block"
    box.style.display = "block"
}
)
cancelpop.addEventListener("click",function(){
     area.style.display = "none"
     box.style.display = "none"

}
)
//book container
var addpop = document.getElementById("add-button")
var contain = document.querySelector(".container")
var bookname = document.getElementById("Book-name")
var author  = document.getElementById("Book-Author")
var short = document.getElementById("short-description")

addpop.addEventListener("click",function(){
    var div= document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML =`<h2>${bookname.value}</h2>
    <h4>${author.value}</h4>
    <hr>
    <br>

    <p>${short.value}</p>
    <button onclick="deletebook(event)">Delete</button>`

    contain.append(div)
    area.style.display = "none"
     box.style.display = "none"
})
function deletebook(event){
    event.target.parentElement.remove()

}