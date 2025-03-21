let count=1;
document.getElementById("addTaskBtn").addEventListener("click",function(){
    let taskInput=document.getElementById("taskInput");
    let taskText=taskInput.value.trim(); 
    if(taskText===""){
        alert(`please enter the task!`);
        return;
    }
    let taskList=document.getElementById("taskList")
    let li=document.createElement("li");
    li.innerHTML=`<span>${count}. ${taskText}</span> 
                    <button class="completeBtn">Complete</button> 
                    <button class="deleteBtn">Delete</button>`;
    let span=li.querySelector("span");

    li.querySelector(".completeBtn").addEventListener("click",function(){
        span.classList.toggle("completed");
    });

    li.querySelector(".deleteBtn").addEventListener("click",function(event){
        event.stopPropagation()
        li.remove();
        updateTasNumbers();
    });
    taskList.appendChild(li);
    taskInput.value="";
    count++;

});

function updateTasNumbers(){
    let tasks=document.querySelectorAll("#taskList li span");
    count=1;
    tasks.forEach(task=>{
        let text=task.innerHTML.split(". ")[1];
        task.innerHTML=`${count}. ${text}`;
        count++;
    });
}

