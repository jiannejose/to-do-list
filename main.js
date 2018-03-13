
let inputTaskField = document.getElementById('inputTask');
let addTaskButton = document.getElementById('addTask');
let tasksList = document.getElementById('tasksList');
let completedTasksList = document.getElementById('completedList');
let taskId = 1;

// add task start
function addTask() {

  tasksList.innerHTML += 
  `<li id="taskNo${taskId}">
      ${inputTaskField.value}

      <div class="actions">
          <button class="edit">
                <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>

          <button class="delete">
                <i class="fa fa-trash" aria-hidden="true"></i>
          </button>

          <button class="done">
                <i class="fa fa-check" aria-hidden="true"></i>
          </button>

          <button class="undo">
                <i class="fa fa-undo" aria-hidden="true"></i>
          </button>
      </div>
      
  </li>`;

  clearInputField();

  whenTaskDone();

  deletingTask();

  taskId++;
}

function clearInputField() {
  inputTaskField.value = "";
}

addTaskButton.addEventListener('click', addTask);
// add task end 


// task done start 
function whenTaskDone() {
    let taskDoneButtons = document.getElementsByClassName('done');

    for (let i=0; i<taskDoneButtons.length; i++) {
      taskDoneButtons[i].addEventListener('click', taskCompleted);
    }
}

function taskCompleted() {
  let grandparentElement = this.parentElement.parentElement;
  
  completedTasksList.innerHTML += grandparentElement.outerHTML;
  grandparentElement.remove();

  deletingTask();

  undoingTask();
}
// task done end


// delete task start 
function deletingTask() {
  let deleteTaskButtons = document.getElementsByClassName('delete');

  for(var i=0; i<deleteTaskButtons.length; i++) {
    deleteTaskButtons[i].addEventListener('click', deleteTask);
  }
}

function deleteTask() {
  let grandparentElement = this.parentElement.parentElement;

  grandparentElement.remove();
}
// delete task end


// undo completing task start 
function undoingTask() {
  let undoTaskButtons = document.getElementsByClassName('undo');

  for(var i=0; i<undoTaskButtons.length; i++) {
    undoTaskButtons[i].addEventListener('click', undoTask);
  }
}

function undoTask() {
  let grandparentElement = this.parentElement.parentElement;

  tasksList.innerHTML += grandparentElement.outerHTML;
  grandparentElement.remove();

  whenTaskDone();

  deletingTask();

}

// undo completing task end