let inputTaskField = document.getElementById('inputTask');
let addTaskButton = document.getElementById('addTask');

function addTask() {
  document.getElementById('tasksList').innerHTML += 
  `<li id="task1">
      ${inputTaskField.value}

      <div class="actions">
          <button>
              <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>

          <button>
              <i class="fa fa-trash" aria-hidden="true"></i>
          </button>

          <button class="done">
              <i class="fa fa-check" aria-hidden="true"></i>
          </button>
      </div>
      
  </li>`;

  clearInputField();

}

function clearInputField() {
  inputTaskField.value = "";
}

addTaskButton.addEventListener('click', addTask);


