document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskDescription = document.getElementById('taskDescription');
    const taskDate = document.getElementById('taskDate');
    const taskStartTime = document.getElementById('taskStartTime');
    const taskEndTime = document.getElementById('taskEndTime');
    const taskList = document.getElementById('taskList');

    let defectCount = 0;
    let totalTasks = 0;

    const loadTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
    const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

    const validateFields = (title, description, date, startTime, endTime) => {
        let errors = [];
        if (!title) errors.push('Task title is required.');
        if (!description) errors.push('Task description is required.');
        if (!date) errors.push('Task date is required.');
        if (!startTime) errors.push('Task start time is required.');
        if (!endTime) errors.push('Task end time is required.');
        return errors;
    };

    const renderTasks = () => {
        const tasks = loadTasks();
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                <div>
                    <h5 class="mb-1 ${task.completed ? 'completed-task' : ''}">${task.title}</h5>
                    <p class="task-details">${task.description || 'No description provided'}</p>
                    <p class="task-details">Date: ${task.date || 'N/A'}</p>
                    <p class="task-details">Start Time: ${task.startTime || 'N/A'}</p>
                    <p class="task-details">End Time: ${task.endTime || 'N/A'}</p>
                </div>
                <div class="btn-group">
                    <button class="btn btn-sm btn-warning" onclick="editTask(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete</button>
                    <button class="btn btn-sm btn-success" onclick="toggleComplete(${index})">Complete</button>
                </div>
            `;
            taskList.appendChild(listItem);
        });
    };

    const addTask = (title, description, date, startTime, endTime) => {
        const errors = validateFields(title, description, date, startTime, endTime);
        if (errors.length) {
            defectCount += errors.length;
            alert(errors.join('\n'));
            return;
        }

        const tasks = loadTasks();
        tasks.push({ title, description, date, startTime, endTime, completed: false });
        saveTasks(tasks);
        renderTasks();
        totalTasks++;
    };

    const logDefectRate = () => {
        console.log(`Defects: ${defectCount}`);
        console.log(`Total Tasks Attempted: ${totalTasks}`);
        console.log(`Defect Rate: ${(defectCount / (defectCount + totalTasks) * 100).toFixed(2)}%`);
    };

    window.editTask = (index) => {
        const tasks = loadTasks();
        const task = tasks[index];
        const newTitle = prompt('Edit Title:', task.title) || task.title;
        const newDescription = prompt('Edit Description:', task.description) || task.description;
        const newDate = prompt('Edit Date (YYYY-MM-DD):', task.date) || task.date;
        const newStartTime = prompt('Edit Start Time (HH:MM):', task.startTime) || task.startTime;
        const newEndTime = prompt('Edit End Time (HH:MM):', task.endTime) || task.endTime;

        tasks[index] = { ...task, title: newTitle, description: newDescription, date: newDate, startTime: newStartTime, endTime: newEndTime };
        saveTasks(tasks);
        renderTasks();
    };

    window.deleteTask = (index) => {
        const tasks = loadTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    };

    window.toggleComplete = (index) => {
        const tasks = loadTasks();
        tasks[index].completed = !tasks[index].completed;
        saveTasks(tasks);
        renderTasks();
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = taskInput.value.trim();
        const description = taskDescription.value.trim();
        const date = taskDate.value;
        const startTime = taskStartTime.value;
        const endTime = taskEndTime.value;

        addTask(title, description, date, startTime, endTime);
        taskForm.reset();
    });

    renderTasks();

    window.addEventListener('beforeunload', logDefectRate);
});
