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

    tasks.forEach(function(task, index) {
        document.getElementById("task__table").innerHTML +=  
        "<li class='task__item'>" +
            "<div class='task__item-wrapper'>" +
                "<div class='task__text-wrapper'>" +
                    "<p class='task__index'>" + (index + 1) + "." + "</p>" + 
                    "<p class='task__text'>" + task + "</p>" +
                "</div>" +
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