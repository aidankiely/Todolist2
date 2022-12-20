const list = document.querySelector('#task-list ul');
const forms = document.forms;

// delete tasks
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add tasks
const addForm = forms['add-task'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const taskName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  taskName.textContent = value;
  deleteBtn.textContent = 'delete';

  // append to DOM
  li.appendChild(taskName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  //list.insertBefore(li, list.querySelector('li:first-child'));
});
