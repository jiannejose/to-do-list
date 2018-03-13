
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
  let parentElement = this.parentElement;
  let grandParentElement = parentElement.parentElement;
  
  completedTasksList.innerHTML += grandParentElement.outerHTML;
  grandParentElement.remove();
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
    let parentElement = this.parentElement;
    let grandParentElement = parentElement.parentElement;

    grandParentElement.remove();
}

// delete task end