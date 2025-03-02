function getInnerTexById(id) {
 const innerText = document.getElementById(id).innerText;
 const convertInnerText = parseInt(innerText);
 return convertInnerText;
}

function setInnerText(id, value) {
 document.getElementById('id').innerText = value;
}

function completed() {
 alert('Board Update successfully');

 const task = getInnerTexById('main-task');
 const checkNumber = getInnerTexById('check-number');
 const countTask = task - 1;
 const countCheckNumber = checkNumber + 1;

 document.getElementById('main-task').innerText = countTask;
 document.getElementById('check-number').innerText = countCheckNumber;

 if(countTask === 0){
 alert('congrates!!! You have completed all the current task');
 }
}

function getHistory(id){
 const headHistory = document.getElementById(id).innerText;
 const historyContainer = document.getElementById('history-container');
 const currentTime = new Date().toLocaleTimeString();

 const newElement = document.createElement('p');
 newElement.innerText = `
     You have completed the task ${headHistory} at ${currentTime}
 `
 historyContainer.appendChild(newElement);
}

function randomNumber(){
 return Math.floor(Math.random() * 256);
}