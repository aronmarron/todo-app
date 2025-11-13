# User Manual

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [Troubleshooting Tips](#troubleshooting-tips)
- [Known Issues](#known-issues)
- [API Documentation](#api-documentation)
- [Changes Made](#changes-made)

---

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- TypeScript (version 4 or higher)
- Tailwind CSS (version 2 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Compile TypeScript code:
   ```bash
   tsc
   ```
   or
   ```bash
   npx tsc
   ```
5. Build Tailwind CSS:
   ```bash
   npx tailwindcss -i src/styles/input.css -o src/styles/output.css
   ```

---

## Features

### Adding To-Do Items
- Open the application in your web browser.
- Enter a new to-do item in the input field at the bottom of the page.
- Click the **Add** button to add the new to-do item.

### Deleting To-Do Items
- Select the to-do item you want to delete by clicking on it.
- Click the **Delete** button next to the selected to-do item.

---

## Troubleshooting Tips

### Error Messages
- If you encounter an error message, check the console output for more information.
- Make sure you have installed all dependencies and compiled the TypeScript code correctly.

---

## Known Issues
- Due to a known issue with Tailwind CSS, some components may not render correctly on older browsers.
- If you experience issues with form submission, try clearing your browser cache or using a different browser.

---

## API Documentation

### TodoList Component
**Props:**
- `todos`: An array of to-do items (required)  
- `handleAddTodo`: Function to handle adding new to-do items (optional)  
- `handleDeleteTodo`: Function to handle deleting to-do items (optional)  

### TodoItem Component
**Props:**
- `todo`: A single to-do item object (required)  
- `onDelete`: Function to handle deleting the to-do item (optional)  

### AddTodo Component
**Props:**
- `onFormSubmit`: Function to handle form submission (required)  
- `newTodoText`: Current text in the input field (optional)  
- `onChange`: Function to handle changes to the input field (optional)  

**Note:** This user manual is a basic guide and may not cover all possible scenarios or edge cases. It's recommended to consult the code documentation and API references for more detailed information.

---

## Changes Made
- Added setup instructions for installing dependencies and compiling TypeScript code.  
- Included troubleshooting tips for error messages and known issues with form submission.  
- Updated API documentation to reflect the correct props for each component.

