This is a simple, responsive Todo List web application built with React, Vite, and TypeScript. The app allows users to add, edit, complete, delete, and filter their tasks. It also features containerization using Docker for easy deployment.

Features
Add new Todos
Edit existing Todos
Mark Todos as completed
Delete Todos
Filter Todos (All, Completed, Uncompleted)
Responsive design with a clean and minimal UI

Tech Stack
React: Frontend library for building the user interface
Vite: Development environment for fast builds and Hot Module Replacement
TypeScript: Typed JavaScript to help prevent bugs and provide better developer experience
Vitest: Testing framework to ensure the application works as expected
Docker: Containerization for easy deployment

Installation
Prerequisites
Node.js and npm installed (Node.js version 14 or later)
Docker installed (for containerization)

Clone the Repository
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app

Install Dependencies
npm install

Run the Application
npm run dev

Running Tests
To run the unit tests, use:
npm run test

Docker Deployment
To containerize and deploy the application using Docker:

Build the Docker image:
docker build -t todo-list-app .

Run the Docker container:
docker run -p 8080:80 todo-list-app

Usage
Add a Task: Type a task description in the input box and click Add.
Edit a Task: Click the Edit button next to the task to change its description.
Complete a Task: Check the box next to a task to mark it as completed.
Delete a Task: Click the Delete button to remove a task from the list.
Filter Tasks: Use the buttons to filter between All, Completed, and Uncompleted tasks.
