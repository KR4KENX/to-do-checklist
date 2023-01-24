window.onload = () => {
    addListenerOnTasks();
}
function addListenerOnTasks(){
    document.querySelectorAll(".task > input").forEach((element) => {
        element.addEventListener("change",()=>{
            element.parentElement.remove();
        })
    });
}

function createTask(){
    let newTask = document.getElementById("newTask");
    let main = document.getElementsByTagName("main")[0];

    if(!newTask.value) return;

    let newTaskEl = document.createElement("div");

    newTaskEl.className = "task";
    newTaskEl.innerHTML = `<input type='checkbox' name='isDone' id='isDone'> <p>${newTask.value}</p>`
    
    main.appendChild(newTaskEl);
    addListenerOnTasks();
}