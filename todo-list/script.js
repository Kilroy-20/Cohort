const mainDiv = document.createElement('div');
mainDiv.classList = 'mainDiv';

const title = document.createElement('h2');
title.innerHTML = 'My Tasks';
title.classList = 'title';

const inputBox = document.createElement('input');
inputBox.placeholder = 'Enter your tasks';

const addBtn = document.createElement('button');
addBtn.textContent = 'Add Task';
addBtn.classList = 'addBtn';

const taskContainer = document.createElement('div');
taskContainer.classList = 'taskContainer';

document.body.appendChild(mainDiv);
mainDiv.append(title,inputBox,addBtn,taskContainer);