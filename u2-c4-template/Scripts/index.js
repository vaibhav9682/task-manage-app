


let form = document.querySelector("form")
let arr = JSON.parse(localStorage.getItem("task-list"))||[]
form.addEventListener("submit", homepage)
function homepage(event){
event.preventDefault()
let task = document.querySelector("#name").value 
let des = document.querySelector("#desc").value
let start = document.querySelector("#start").value
let end = document.querySelector("#end").value
let priority = document.querySelector("#priority").value
let obj ={
    "Task": task,
    "description" : des,
    "start": start,
    "end":end,
    "prior":priority,
}
arr.push(obj)
localStorage.setItem("task-list",JSON.stringify(arr))
document.querySelector("#name").value = ""
document.querySelector("#desc").value = ""
document.querySelector("#start").value = ""
document.querySelector("#end").value  = ""
document.querySelector("#priority").value = ""
}