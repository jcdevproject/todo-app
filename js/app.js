const button = document.getElementById('addButton');    /* The button to add new tasks to the list*/

const toDolist = document.getElementById('toDolist'); /* The to-do-list*/

button.addEventListener('click',addTask);

function addTask(){

   
    let  taskName = document.getElementById('newTask').value  /* store the new task name from user input*/

    const task=document.createElement('li'); /* a variable to create a new list item*/
    const taskContent = document.createTextNode(taskName); /* a variable to create a task name*/
 
    
    /* a variable to create a "done" button */
    const doneButton =document.createElement('button');
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("class", "doneButton");

    doneButton.addEventListener('click',crossTask);
    
    /* a variable to create a "delete" button */
    const delButton =document.createElement('button');
    delButton.innerHTML = "Delete";
    delButton.setAttribute("class", "delButton");

    delButton.addEventListener('click',removeTask);

    /* add task name and buttons to a new list item */
    task.appendChild(taskContent);
    task.appendChild(delButton);
    task.appendChild(doneButton);

    /* add a new list item to the to-do list*/
    toDolist.appendChild(task);

}

/* remove the list item (parent of the button) */
function removeTask(){
    this.parentElement.remove() 
}
/* draw an line throught the list-item(parent of the button) */
function crossTask(){
    this.parentElement.style.textDecoration = 'line-through';
}