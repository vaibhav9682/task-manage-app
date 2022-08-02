// Write code for the Progress page here 
let progreslist = JSON.parse(localStorage.getItem("priority-list"))
for(i = 0 ; i<progreslist.length;i++){
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
    
    col1.innerText = progreslist[i].Task
    col2.innerText = progreslist[i].description
    col3.innerText = progreslist[i].start
    col4.innerText = progreslist[i].end
    col5.innerText = progreslist[i].prior
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
     dele(row,index)
 })
}

function erase(row,index){
    row.remove()
    let update = JSON.parse(localStorage.getItem("priority-list"))
    update.splice(index,1)
    localStorage.setItem("priority-list",JSON.stringify(update))
}

let arr2 =  JSON.parse(localStorage.getItem("done-list"))||[]
function dele(row,index){

arr2.push(progreslist[index])
localStorage.setItem("done-list",JSON.stringify(arr2))
   row.remove()
 let update = JSON.parse(localStorage.getItem("priority-list"))
 update.splice(index,1)
 localStorage.setItem("priority-list",JSON.stringify(update))
}