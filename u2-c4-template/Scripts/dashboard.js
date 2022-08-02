// Write code related to dashboard page here
let tasklist = JSON.parse(localStorage.getItem("task-list"))
let c  = 0
let num = document.querySelector("#task-count")
num.innerText = c
// in normal condition 

for(i = 0 ; i<tasklist.length;i++){
    c++
    num.innerText = c
 createtable(i)
}


// in filter operation

document.querySelector('#filter').addEventListener("change",filter)
function filter(){
   
 let select = document.querySelector('#filter')
 if(select.value === "all"){
    let tasklist = JSON.parse(localStorage.getItem("task-list"))
    let body  = document.querySelector("tbody")
    body.innerHTML = ""
    let c  = 0
    let num = document.querySelector("#task-count")
    num.innerText = c
    for(i = 0 ; i<tasklist.length;i++){
       c++
        num.innerText = c
    createtable(i)
     }
}else if(select.value === "Low"){
    let tasklist = JSON.parse(localStorage.getItem("task-list"))
   let body  = document.querySelector("tbody")
 body.innerHTML = ""
 let c  = 0
 let num = document.querySelector("#task-count")
 num.innerText = c
    for(i = 0 ; i<tasklist.length;i++){
        
        if(tasklist[i].prior==="Low"){
           
            c++
            num.innerText = c
        createtable(i)
        }
       
     }
}else if(select.value === "Medium"){
    let tasklist = JSON.parse(localStorage.getItem("task-list"))
    let body  = document.querySelector("tbody")
    body.innerHTML = ""
    let c  = 0
    let num = document.querySelector("#task-count")
    num.innerText = c
    for(i = 0 ; i<tasklist.length;i++){
        if(tasklist[i].prior==="Medium"){
            c++
            num.innerText = c
        createtable(i)
        }
       
     }
}else if(select.value === "High"){
    let tasklist = JSON.parse(localStorage.getItem("task-list"))
    let body  = document.querySelector("tbody")
 body.innerHTML = ""
 let c = 0
 let num = document.querySelector("#task-count")
 num.innerText = c
    for(i = 0 ; i<tasklist.length;i++){
        if(tasklist[i].prior==="High"){
           c++
            num.innerText = c
        createtable(i)
        }
     }
}
}


function createtable(i){
   
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
    let col2 = document.createElement("td")
    let col3 = document.createElement("td")
    let col4 = document.createElement("td")
    let col5 = document.createElement("td")
    let col6 = document.createElement("td")
    let col7 = document.createElement("td")
    document.querySelector("tbody").append(row)
    row.append(col1,col2,col3,col4,col5,col6,col7)
    
    col1.innerText = tasklist[i].Task
    col2.innerText = tasklist[i].description
    col3.innerText = tasklist[i].start
    col4.innerText = tasklist[i].end
    col5.innerText = tasklist[i].prior
    if(col5.innerText === "Low"){
        col5.style.backgroundColor = "green";
    }else if(col5.innerText === "High"){
        col5.style.backgroundColor = "red";
    }else if(col5.innerText === "Medium"){
        col5.style.backgroundColor = "#4293AB";
    }




    col6.innerText = "Add"
    col7.innerText = "Delete"
    let index = i
 col7.addEventListener("click", function(){
    erase(row,index)
 })
 col6.addEventListener("click", function(){
     del(row,index)
 })
}

function erase(row,index){
    row.remove()
    let update = JSON.parse(localStorage.getItem("task-list"))
    update.splice(index,1)
    localStorage.setItem("task-list",JSON.stringify(update))
    filter()
}

let arr1 =   JSON.parse(localStorage.getItem("priority-list"))||[]
function del(row,index){
c--

arr1.push(tasklist[index])
localStorage.setItem("priority-list",JSON.stringify(arr1))
   row.remove()
 let update = JSON.parse(localStorage.getItem("task-list"))
 update.splice(index,1)
 localStorage.setItem("task-list",JSON.stringify(update))
 filter()
}