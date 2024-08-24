//Variables
const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

//Adding Enter key functionallity

inputTask.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        addToDo();
    }
});

addTask.addEventListener('click' , addToDo);

function addToDo(){

taskValue = inputTask.value.trim();

if(taskValue === ""){
    alert("Enter some task!");
    return;
}

//creating div task
let task = document.createElement('div');
task.classList.add('task');

//creating li element
let li = document.createElement('li');
li.innerHTML = `${inputTask.value}`;
task.appendChild(li);

taskContainer.appendChild(task);

//checkbtn and delete btn
let checkbtn = document.createElement("button");
checkbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
checkbtn.classList.add('checkTask');
task.appendChild(checkbtn);

let deletebtn = document.createElement("button");
deletebtn.innerHTML = `<i class= "fa-solid fa-trash-can"></i>`;
deletebtn.classList.add('deleteTask');
task.appendChild(deletebtn);
//Clearing input field
inputTask.value = "";

//Adding delete and check functionallity
checkbtn.addEventListener('click',function(){
    checkbtn.parentElement.style.textDecoration = "line-through";
});

deletebtn.addEventListener('click', function(){
    deletebtn.parentElement.remove(li);
});

}