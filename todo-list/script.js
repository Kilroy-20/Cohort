const mainDiv = document.createElement('div');
mainDiv.classList = 'mainDiv';

const header = document.createElement('div');
header.classList = 'header';

const title = document.createElement('h2');
title.innerHTML = 'To-do App';
title.classList = 'title';

const inputDiv = document.createElement('div');
inputDiv.classList = 'inputDiv';

const inputBox = document.createElement('input');
inputBox.placeholder = 'Enter your tasks';
inputBox.classList = 'inputBox';

const addBtn = document.createElement('button');
addBtn.textContent = 'Add Task';
addBtn.classList = 'addBtn';

// const inputContainer = document.createElement('')

const taskContainer = document.createElement('div');
taskContainer.classList = 'taskContainer';

document.body.appendChild(header);
document.body.appendChild(mainDiv);
mainDiv.append(inputDiv);
header.appendChild(title);
inputDiv.append(inputBox,addBtn);
document.body.append(taskContainer);

const style = document.createElement('style');
style.innerHTML = `
.completed {
    text-decoration: line-through;
    color: gray;
    opacity: 0.6;
}
`;
document.head.appendChild(style);

//localStorage function
function saveData() {
    let allTasks = taskContainer.querySelectorAll('.task');
    let data = [];
    allTasks.forEach((singleTask) => {
        if(singleTask.firstChild) {
        data.push({text: singleTask.firstChild.textContent,
            completed: singleTask.classList.contains('completed')
        });}
        // console.log(data);
    });
    
    console.log("Saving Data:", data);
    localStorage.setItem("tasks", JSON.stringify(data));
};



//create, delete, complete task

function createTask(textValue, isDone) {
    
    let task = document.createElement('div');
        task.className = 'task';
        task.textContent = textValue;
    
        if(isDone === true) {
        task.classList.add('completed');
        }
        
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'x';
        
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            task.remove();
            saveData();
        });
        task.appendChild(deleteBtn);

        task.addEventListener('click', () => {
            task.classList.toggle('completed');
            saveData();
        })
        
        taskContainer.appendChild(task);
        
}

//add button
addBtn.addEventListener('click', () => {
    let value = inputBox.value;

    if(value === "") {
       return alert('Please Write Something');
    } 
        createTask(value, false);
        inputBox.value = "";
});

inputBox.addEventListener('keydown',(e) =>{
    if(e.key === 'Enter') {
        addBtn.click();
    }
})

function showData() {
    let savedTasks = localStorage.getItem('tasks');
    if(savedTasks) {
        let tasksArray = JSON.parse(savedTasks);
        tasksArray.forEach((singleTaskText) => {
            createTask(singleTaskText.text, singleTaskText.completed);
        });
    
    }
}

showData();
