// To-Do List Application with Local Storage
class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.storageKey = 'todolist_tasks';
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        // Add task
        document.getElementById('addBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Clear completed button
        document.getElementById('clearBtn').addEventListener('click', () => this.clearCompleted());
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const taskText = input.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.tasks.push(newTask);
        input.value = '';
        this.saveToStorage();
        this.render();
    }

    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveToStorage();
            this.render();
        }
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveToStorage();
            this.render();
        }
    }

    clearCompleted() {
        if (confirm('Are you sure you want to delete all completed tasks?')) {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveToStorage();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const remaining = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('remainingTasks').textContent = remaining;

        // Show/hide clear button
        document.getElementById('clearBtn').style.display = completed > 0 ? 'block' : 'none';
    }

    render() {
        const taskList = document.getElementById('taskList');
        const filteredTasks = this.getFilteredTasks();

        taskList.innerHTML = '';

        if (filteredTasks.length === 0) {
            taskList.innerHTML = `
                <li class="empty-state">
                    <p>✨ ${this.currentFilter === 'completed' ? 'No completed tasks yet!' : this.currentFilter === 'active' ? 'All done! Great job!' : 'No tasks yet. Add one to get started!'}</p>
                </li>
            `;
        } else {
            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.className = task.completed ? 'completed' : '';
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="checkbox" 
                        ${task.completed ? 'checked' : ''}
                        onchange="app.toggleTask(${task.id})"
                    >
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <button class="delete-btn" onclick="app.deleteTask(${task.id})">Delete</button>
                `;
                taskList.appendChild(li);
            });
        }

        this.updateStats();
    }

    saveToStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }

    loadFromStorage() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            try {
                this.tasks = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading tasks from storage:', e);
                this.tasks = [];
            }
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TodoApp();
});
