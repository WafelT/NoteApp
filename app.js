// const clearBtn = document.getElementById('clear__button');
// const addBtn = document.getElementById('add__button');
// const addInput = document.getElementById('add__input');
// const taskTable = document.getElementById('task__table');
// const body = document.querySelector('body');
// const tasks = document.querySelectorAll('.task__item');
// let closeBtn = document.querySelectorAll('.task__item-close');
// let taskNum = document.querySelectorAll('.task__number');
// let doneBtn = document.querySelectorAll('.task__item-done');


// // Create Element

// addBtn.addEventListener('click', function () {
//     let inputNode = document.createTextNode(addInput.value);

//     if (inputNode.length === 0) {
//         return;
//     }

//     let newItem = document.createElement('article');
//     newItem.classList.add('task__item');
//     taskTable.appendChild(newItem);
    
//     let wrapperText = document.createElement('div');
//     wrapperText.classList.add('task__item-text-wrapper');
//     newItem.appendChild(wrapperText);
    
//     let taskNum = document.querySelectorAll('.task__number');

//     let taskNumber = document.createElement('h2');
//     let taskNumberNode = document.createTextNode(taskNum.length + 1 + '.');
//     taskNumber.classList.add('task__number');
//     taskNumber.appendChild(taskNumberNode);
//     wrapperText.appendChild(taskNumber);

//     let btnWrapper = document.createElement('div');
//     btnWrapper.classList.add('task__item-wrapper');
//     newItem.appendChild(btnWrapper);

//     let taskText = document.createElement('p');
//     taskText.classList.add('task__text');
//     wrapperText.appendChild(taskText);
//     taskText.appendChild(inputNode);
    
//     let btnDone = document.createElement('button');
//     btnDoneNode = document.createTextNode('Done');
//     btnDone.classList.add('task__item-done');
//     btnDone.appendChild(btnDoneNode);
//     btnWrapper.appendChild(btnDone);

//     let btnClose = document.createElement('button');
//     let btnCloseSpan = document.createElement('span');
//     btnClose.classList.add('task__item-close');
//     btnClose.appendChild(btnCloseSpan);
//     btnClose.appendChild(btnCloseSpan);
//     btnWrapper.appendChild(btnClose);

//     addInput.value = "";
// });


// // Button functions (Close && Done)

// function doneBtnWork() {
//     doneBtn.forEach(function (item) {
//         item.addEventListener('click', function () {
//             item.closest('.task__item').remove();
//         });
//     });
// };

// function closeBtnWork() {
//     closeBtn.forEach(function (item) {
//         item.addEventListener('click', function () {
//             item.closest('.task__item').remove();
//         });
//     });
// };


// addBtn.addEventListener('click', function () {
//     doneBtn = document.querySelectorAll('.task__item-done');
//     doneBtnWork();
// });

// addBtn.addEventListener('click', function () {
//     closeBtn = document.querySelectorAll('.task__item-close');
//     closeBtnWork();
// });

// addBtn.addEventListener('click', function () {
//     let tasks = document.querySelectorAll('.task__item');
//     clearBtn.addEventListener('click', function () {
//         tasks.forEach(function(item) {
//             item.remove();
//         });
//     });
// });

// doneBtnWork();
// closeBtnWork();




const addBtn = document.getElementById('add__button');

let tasks = [];

window.onload = function() {
    if (JSON.parse(localStorage.getItem("tasks")) != null)
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(tasks);
        showTasks();
  };

function showTasks() {
    document.getElementById("task__table").innerHTML = "";

    tasks.forEach(function(task) {
        document.getElementById("task__table").innerHTML +=  
        "<li class='task__item'>" +
            "<div class='task__item-wrapper'>" +
                "<p class='task__text'>" + task + "</p>" +
                "<div class='task__item-buttons'>" +
                    "<button onclick='deleteTask()' class='task__item-done'>Done</button>" +
                    "<button onclick='deleteTask()' class='task__item-close'><span></span></button>" +
                "</div>"
            "</div>"
        "</li>";
    });
}

function deleteTask(task) {
    tasks.splice(task, 1);
    if (localStorage.getItem("tasks") == null) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    showTasks();
}

function addTask() {
    if (document.getElementById("add__input").value.trim() != "") {
        tasks.push(document.getElementById("add__input").value.trim());

        if (localStorage.getItem("tasks") == null) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        showTasks();

        document.getElementById("add__input").value = "";
    }
}


addBtn.addEventListener('click', function() {
    addTask();
});

window.addEventListener('keypress', function (e) {
    if(e.key === 'Enter') {
        addTask();
    }
});

document.getElementById('clear__button').addEventListener('click', function() {
    localStorage.clear();
    tasks.splice(tasks);
    showTasks();
});