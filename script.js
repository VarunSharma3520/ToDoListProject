let i = 0;
let add = ()=>{ 
    let goal = document.getElementById("goal").value;
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = taskList.innerHTML + `<div class="taskItem" id="taskItem${i}">
    <p class="item text">${goal}</p>
    <button class="delete add" onclick="deleteGoal(${i})">Delete</button>
    </div>`;
    i+=1;
}

let deleteGoal = (j) =>{
    let taskItem = document.getElementById(`taskItem${j}`);
    taskItem.innerHTML = "";
}