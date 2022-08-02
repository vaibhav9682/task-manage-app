let donelist = JSON.parse(localStorage.getItem("done-list"))
for(i = 0 ; i<donelist.length;i++){
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
    let col2 = document.createElement("td")
    let col3 = document.createElement("td")
    let col4 = document.createElement("td")
    let col5 = document.createElement("td")
    let col6 = document.createElement("td")
   
    document.querySelector("tbody").append(row)
    row.append(col1,col2,col3,col4,col5,col6)
    
    col1.innerText = donelist[i].Task
    col2.innerText = donelist[i].description
    col3.innerText = donelist[i].start
    col4.innerText = donelist[i].end
    col5.innerText = donelist[i].prior

    if(col5.innerText === "Low"){
        col5.style.backgroundColor = "green";
    }else if(col5.innerText === "High"){
        col5.style.backgroundColor = "red";
    }else if(col5.innerText === "Medium"){
        col5.style.backgroundColor = "#4293AB";
    }

    col6.innerText = "Delete"

      let index = i
    
    col6.addEventListener("click",function(){
        erase(row,index)
    })
}


function erase(row,index){
    row.remove()
    let update = JSON.parse(localStorage.getItem("done-list"))
    update.splice(index,1)
    localStorage.setItem("done-list",JSON.stringify(update))
}