# 📝 To-Do List Application

A modern, feature-rich To-Do List application built with vanilla JavaScript, HTML, and CSS. All your tasks are saved locally in your browser using Local Storage, so your data persists even after closing the browser.

## ✨ Features

- ✅ **Add & Delete Tasks** - Easily add new tasks and remove completed ones
- 💾 **Local Storage** - Your tasks are automatically saved to your browser
- 🔍 **Filter Tasks** - View all tasks, only active tasks, or completed tasks
- 📊 **Statistics** - Track total tasks, completed tasks, and remaining tasks
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✔️ **Mark Completed** - Check off tasks as you complete them
- 🗑️ **Bulk Clear** - Clear all completed tasks at once
- 🔒 **Data Security** - All data stored locally, no server required

## 🚀 How to Use

1. **Open the application** - Simply open `index.html` in your web browser
2. **Add a Task** - Type your task in the input field and click "Add Task" or press Enter
3. **Mark Complete** - Click the checkbox next to a task to mark it as completed
4. **Delete Task** - Click the "Delete" button to remove a task
5. **Filter Tasks** - Use the filter buttons to view All, Active, or Completed tasks
6. **Track Progress** - Monitor your progress with the statistics section
7. **Clear Completed** - Click "Clear Completed Tasks" to remove all finished tasks at once

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox, grid, and gradients
- **Vanilla JavaScript (ES6+)** - No dependencies required
- **LocalStorage API** - Browser's built-in data persistence

### File Structure
```
todo-list/
├── index.html      # HTML structure and markup
├── styles.css      # Styling and responsive design
├── script.js       # Application logic and functionality
└── README.md       # Documentation (this file)
```

### Key JavaScript Features
- **TodoApp Class** - Object-oriented architecture
- **Data Persistence** - Automatic save/load from LocalStorage
- **Event Handling** - Dynamic event listeners for user interactions
- **DOM Manipulation** - Real-time UI updates
- **XSS Protection** - HTML escaping for security
- **Responsive Rendering** - Efficient re-rendering system

## 💾 Data Storage

All tasks are stored in your browser's LocalStorage under the key `todolist_tasks`. Your data:
- ✅ Persists across browser sessions
- ✅ Is stored locally (no internet required)
- ✅ Can be cleared by clearing browser data
- ⚠️ Won't sync across different devices

## 📊 Task Object Structure

Each task is stored as a JavaScript object:
```javascript
{
  id: 1234567890,           // Unique identifier (timestamp)
  text: "Task description", // The task text
  completed: false,         // Completion status
  createdAt: "9/14/2026"   // Creation date and time
}
```

## 🎯 Keyboard Shortcuts

- **Enter** - Add a new task (when input is focused)
- **Tab** - Navigate between elements

## 🌐 Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- LocalStorage API
- CSS Grid & Flexbox

Tested on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎨 Customization

You can customize the appearance by modifying `styles.css`:
- Change colors: Update gradient values in `header` and `add-btn`
- Adjust spacing: Modify padding and margin values
- Change fonts: Update the `font-family` in the `body` selector
- Add animations: Enhance the existing transitions

## 📝 Example Use Cases

- Daily task management
- Project planning
- Shopping lists
- Study goals
- Habit tracking
- Quick note-taking

## 🔄 Future Enhancement Ideas

- ✨ Task categories and tags
- 📅 Due dates and reminders
- 🎯 Priority levels
- 📁 Drag and drop reordering
- 🌙 Dark mode
- 📤 Export/Import tasks
- ⏰ Task timing and Pomodoro timer
- 🔄 Recurring tasks

## 📄 License

This project is part of my portfolio and is open for educational use.

## 👨‍💻 Author

**daavxtz** - Created as a portfolio project demonstrating web development skills.

---

**Enjoy organizing your tasks! 🎉**
