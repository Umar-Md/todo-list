# Todo List Application

## Overview

This is a simple Todo List application built with React. It allows users to create, update, delete, and search tasks. The tasks can be marked as completed, and each task displays a description and the timestamp of the last update. The application is designed with a clean, modern interface and is structured to be easily extendable for future enhancements.

## Features

- **Create Task**: Users can add new tasks using a form.
- **Update Task**: Users can edit existing tasks inline.
- **Mark as Done**: Users can mark tasks as completed using a checkbox.
- **Search Tasks**: Users can search for tasks by title or description.
- **Expandable List**: Tasks are displayed in an expandable list format.
- **Data Storage**: Tasks are stored in a dummy JSON file located in the `public/` directory.

## Implementation

### Core Components

1. **TaskList**: Displays the list of tasks.
2. **TaskItem**: Represents a single task with options to edit, delete, and mark as completed.
3. **SearchBar**: Provides search functionality to filter tasks.
4. **TaskForm**: A form to add new tasks.

### App Structure

- **src/components**: Contains all the core components.
  - `TaskList.js`
  - `TaskItem.js`
  - `SearchBar.js`
  - `TaskForm.js`
- **src/styles**: Contains the CSS file for styling.
  - `App.css`
- **public**: Contains the dummy JSON data.
  - `data.json`
- **src/App.js**: The main application file that integrates all components.

### Styling

- The application is styled to be responsive and user-friendly.
- All components are contained within a centered container for a clean layout.

## Setup and Run

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd todo-list
