# To-Do List Application

## Overview
The To-Do List Application is a lightweight and intuitive task management tool designed to help users organize their daily activities, set priorities, and track progress. This application is suitable for personal use, team projects, or professional task management.

## Features
- **Add Tasks**: Quickly add tasks with a title and optional description.
- **Edit Tasks**: Modify task details, including title, description, and priority.
- **Delete Tasks**: Remove completed or unnecessary tasks.
- **Mark as Completed**: Check off tasks when finished.
- **Categorization**: Organize tasks into categories (e.g., Work, Personal, Errands).
- **Due Dates**: Set and manage deadlines for tasks.
- **Search and Filter**: Easily find tasks based on keywords or status.

## Getting Started

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) (version 14 or above) installed.
- A modern web browser (e.g., Chrome, Firefox).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LuckySibuyi/ToDo-List.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:8080`.

## Usage
1. **Adding Tasks**: Use the "+ Add Task" button to create a new task.
2. **Editing Tasks**: Click on a task to edit its details.
3. **Deleting Tasks**: Use the delete icon next to a task to remove it.
4. **Marking as Completed**: Check the box next to a task title to mark it as done.
5. **Filtering**: Use the filter options to view tasks by category, status, or due date.

## Project Structure
```
.
Folder Structure:

ToDo List/
│
├── views/           # EJS templates
│   ├── layout/
│   │   └── main.ejs # Main layout file
│   ├── index.ejs    # Home page
│   └── completed.ejs # Completed tasks page
│
├── public/          # Static files (CSS, JS, images)
│
├── .env             # Environment variables (e.g., PORT)
├── app.js           # Main application file
├── package.json     # Node.js dependencies
└── package-lock.json
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your fork and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- Inspiration from various task management tools.
- Thanks to the open-source community for libraries and resources.
