const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () =>{
    let taskText = taskInput.value;

    if (taskText === "")return;
    addTask(taskText);
    taskInput.value = '';
});


function addTask(taskText){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = taskText;

    taskList.appendChild(li);


    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-sm btn-outline-danger";
    delBtn.textContent = "✖";

delBtn.addEventListener("click", (e) =>{
    e.stopPropagation(); //prevents other events triggered by button click
    li.remove();
});

li.appendChild(delBtn);
taskList.appendChild(li);

};


