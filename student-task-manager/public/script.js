document.getElementById('taskForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const courseId = document.getElementById('courseId').value;
    const name = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const details = document.getElementById('details').value;

    const response = await fetch(`http://localhost:5000/courses/${courseId}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, name, dueDate, details })
    });

    const result = await response.json();
    alert(result.message || 'Task added successfully');
});

document.getElementById('fetchTasks').addEventListener('click', async function () {
    const courseId = document.getElementById('courseIdFetch').value;

    const response = await fetch(`http://localhost:5000/courses/${courseId}/tasks`);
    const tasks = await response.json();

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.name} (Due: ${task.dueDate.split('T')[0]}) - ${task.details || 'No details provided'}`;
        taskList.appendChild(listItem);
    });
});
