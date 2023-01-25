window.onload = () => {
    addListenerOnTasks();
}
function addListenerOnTasks(){
    document.querySelectorAll(".task > textarea").forEach((element) => {
        element.addEventListener("keydown",(key)=>{
            if(key.key === "Enter"){
                createTask(element);
            }
        })
    });

    document.querySelectorAll(".task > input[type='checkbox']").forEach((element) => {
        element.checked = true;
        element.addEventListener("change",() =>{
                if(element.parentNode.querySelector("textarea") && !element.parentNode.querySelector("textarea").value) return;
                element.parentElement.remove();          
        })
    })
}

function createTask(nodeElement){
    let newParagpEl = document.createElement("p");
    let taskClone = nodeElement.parentNode.cloneNode(true);
    taskClone.querySelector("textarea").value = "";

    newParagpEl.innerText = nodeElement.value;
    nodeElement.parentNode.appendChild(newParagpEl);

    document.querySelector("main").appendChild(taskClone);

    nodeElement.parentNode.removeChild(nodeElement);

    addListenerOnTasks();
}
