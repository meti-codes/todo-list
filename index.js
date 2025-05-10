const inputText = document.querySelector('#text');
const taskList = document.querySelector('#taskList');
const submit = document.querySelector('#submit');




submit.addEventListener('click' , (e) => {
    e.preventDefault();

    console.log(`${inputText.value}`);
    const taskText = inputText.value;
    const newTask = document.createElement("li");

    // newTask.innerText = taskText;
    // you can do this //if (taskText.trim() === "") return; //I Make sure the user doesn't submit empty tasks 😍
    //and you can do this too 👇
    if(taskText.trim() === "" ) {
        alert("please write something to add");
        return;
    }
    newTask.innerHTML = `${taskText} <button class="delete-btn">❌</button>`;
    taskList.appendChild(newTask)
    inputText.value = ""; // empty the input field
})
taskList.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }

    if (e.target.classList.contains("delete-btn")) {
        const confirmDelete = confirm("Delete this task?");
        if (confirmDelete) {
            e.target.parentElement.remove();
        }
    }
});