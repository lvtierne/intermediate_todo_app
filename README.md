# To-Do List Application

## Overview
The To-Do List application is a simple web-based tool that allows users to manage their tasks effectively. Users can add, delete, and mark tasks as completed. This project reinforces skills in full-stack development using HTML, CSS, JavaScript, Node.js, and Express.js.

## Purpose and Features
The primary purpose of this application is to help users organize their tasks efficiently. Key features include:
- **Adding Tasks:** Users can input a task and add it to the list.
- **Deleting Tasks:** Each task has a delete button for easy removal.
- **Marking as Completed:** Users can click on a task to toggle its completion status, visually indicating its state.

## Technologies Used
### Front-End:
- **HTML:** For structuring the application (input fields, buttons, lists).
- **CSS:** For styling the application and ensuring visual appeal; utilized Flexbox for responsiveness.
- **JavaScript:** For handling user interactions, managing task state, and making fetch API calls.

### Back-End:
- **Node.js:** To create the server that handles requests and serves data to the front-end.
- **Express.js:** To simplify routing and manage HTTP requests (GET, POST, DELETE, PUT).

## Development Process
1. **Planning:** Outlined main features and functionalities, sketched UI layout, and identified necessary back-end endpoints.
  
2. **Building the Front-End:** Created the HTML structure and styled it with CSS. Ensured responsive design using Flexbox.

3. **Implementing Functionality:** Wrote JavaScript code to handle user interactions, such as adding and removing tasks, and managing task states. Integrated fetch API calls to communicate with the back-end.

4. **Setting Up the Back-End:** Created a Node.js server using Express.js to handle requests. Developed endpoints for fetching tasks, adding new tasks, deleting tasks, and updating task statuses.

## Challenges Faced
- **Handling Empty Inputs:** Implemented validation to prevent users from adding empty tasks.
- **Error Handling:** Added error handling for API requests to provide user feedback in case of issues during data retrieval or submission.

## Learning Outcomes
This project reinforced my understanding of:
- Full-stack development by connecting front-end and back-end services.
- RESTful API practices for effective data management.
- Working with asynchronous JavaScript using the fetch API.
- Responsive design techniques using Flexbox.

## Future Improvements
Possible enhancements to the application include:
- **User Authentication:** Allow users to create accounts and save their tasks.
- **Task Prioritization:** Enable users to categorize tasks by priority.
- **Due Dates:** Allow users to set deadlines for tasks.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app
    ```

2. Install the dependencies:
   ```bash
   npm install
    ```
3. Start the Server:
   ```bash
   npm start
    ```
4. Open your browser and go to http://localhost:3000 to view the application.
