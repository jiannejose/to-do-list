
let inputTaskField = document.getElementById('inputTask');
let addTaskButton = document.getElementById('addTask');
let tasksList = document.getElementById('tasksList');
let completedTasksList = document.getElementById('completedList');
let taskId = 1;


inputTaskField.focus();

// add task start
function addTask() {

  tasksList.innerHTML += 
  `<li id="taskNo${taskId}">
      <span class="input-value">${inputTaskField.value}</span>

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

          <button class="save">
              <i class="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
      </div>
      
  </li>`;

  clearInputField();

  whenTaskDone();

  deletingTask();

  editingTask();

  savingRenamedTask();

  taskId++;
}

function clearInputField() {
  inputTaskField.value = "";
}

addTaskButton.addEventListener('click', addTask);
// add task end 


// 'enter' key trigger start
  inputTaskField.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
      addTaskButton.click();
    }
  })
// 'enter key trigger end

// task done start 
function whenTaskDone() {
    let taskDoneButtons = document.getElementsByClassName('done');

    for (let i=0; i<taskDoneButtons.length; i++) {
      taskDoneButtons[i].addEventListener('click', taskCompleted);
    }
}

function taskCompleted() {
  let grandparentElement = this.parentElement.parentElement;
  let doneButton = grandparentElement.querySelector('.done');
  doneButton.remove();

  let replaceDoneButton = grandparentElement.querySelector('.actions');
  replaceDoneButton.innerHTML += `
    <button class="undo">
        <i class="fa fa-undo" aria-hidden="true"></i>
    </button>
  `;

  completedTasksList.innerHTML += grandparentElement.outerHTML;
  
  grandparentElement.remove();

  deletingTask();

  undoingTask();

  editingTask();

  savingRenamedTask();
}
// task done end


// delete task start 
function deletingTask() {
  let deleteTaskButtons = document.getElementsByClassName('delete');

  for(let i=0; i<deleteTaskButtons.length; i++) {
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

  for(let i=0; i<undoTaskButtons.length; i++) {
    undoTaskButtons[i].addEventListener('click', undoTask);
  }
}

function undoTask() {
  let grandparentElement = this.parentElement.parentElement;
  let undoButton = grandparentElement.querySelector('.undo');
  undoButton.remove();

  let replaceUndoButton = grandparentElement.querySelector('.actions');
  replaceUndoButton.innerHTML += `
    <button class="done">
        <i class="fa fa-check" aria-hidden="true"></i>
    </button>
  `;

  tasksList.innerHTML += grandparentElement.outerHTML;
  
  grandparentElement.remove();

  whenTaskDone();

  deletingTask();

  editingTask();

  savingRenamedTask();

}
// undo completing task end


// rename task start 
function editingTask() {
  let editTaskButtons = document.getElementsByClassName('edit');

  for(let i=0; i<editTaskButtons.length; i++) {
    editTaskButtons[i].addEventListener('click', editTask);
  }
}

function editTask() {
  let grandparentElement = this.parentElement.parentElement;
  grandparentElement.classList.add('edit_task');  

}
// rename task end


// save task's new name start
function savingRenamedTask() {
  let saveRenamedTaskButton = document.getElementsByClassName('save');

  for(var i=0; i<saveRenamedTaskButton.length; i++) {
    saveRenamedTaskButton[i].addEventListener('click', saveRenamedTask);
  }
}

function saveRenamedTask() {
  let grandparentElement = this.parentElement.parentElement;
  
  
  // let grandparentElement = this.parentElement.parentElement;
  // grandparentElement.classList.remove('edit_task');
}


// save task's new name end