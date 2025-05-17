# JSL04_LISDEJ25125_FTO2502B1_Lisa-De-Jongh_JSL

This Kanban Task manager project was modified into an interactive website using DOM Manipulation with adding interaction and CSS and HTML manipulation. It dynamically creates modals for task manipulation and provides a simple way to move tasks between different status columns.

## Features

- **Interactive Task Management**: Click on any task to open a detailed editor
- **Task Editing**: Modify task titles and descriptions through a modal interface
- **Status Tracking**: Move tasks between "Todo", "Doing", and "Done" columns
- **Delete Functionality**: Remove tasks that are no longer needed
- **Clean Modal Interface**: User-friendly popup with form controls
- **Responsive Design**: Works across different screen sizes

## Technical Implementation

The project is implemented entirely with vanilla JavaScript DOM manipulation:

1. **Modal System**: Dynamically creates a modal overlay for task editing
2. **Event Handling**: Sets up listeners for task clicks and modal interactions
3. **Dynamic DOM Creation**: Generates all UI elements programmatically
4. **Column Management**: Automatically moves tasks between columns based on status changes

## Usage Instructions

1. **View Tasks**: Tasks are displayed in their respective columns (Todo, Doing, Done)
2. **Edit a Task**: Click on any task to open the editor modal
3. **Update Information**: Modify the title, description, or status
4. **Save Changes**: Click "Save Changes" to update the task (it will move to the appropriate column)
5. **Delete Task**: Click "Delete Task" to remove it from the board
6. **Close Modal**: Click outside the modal or the × button to dismiss without saving

## Code Structure

The code is organized into distinct sections:

- **Initial Setup**: Creates the modal overlay
- **Modal Creation**: Handles the dynamic building of the task editor
- **Helpers**: Utility functions for status detection and styling
- **Event Activation**: Sets up all necessary event listeners
