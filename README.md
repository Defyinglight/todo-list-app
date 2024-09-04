
# Todo List Web Application

This is a simple Todo List web application built with **React**, **Vite**, and **TypeScript**. The app allows users to create, edit, complete, delete, and filter tasks. It also features containerization using **Docker** for easy deployment.

## Features

- Add new Todos
- Edit existing Todos
- Mark Todos as completed
- Delete Todos
- Filter Todos (All, Completed, Uncompleted)
- Responsive design with a clean and minimal UI

## Tech Stack

- **React**: Frontend library for building the user interface
- **Vite**: Development environment for fast builds and Hot Module Replacement
- **TypeScript**: Typed JavaScript to help prevent bugs and provide better developer experience
- **Vitest**: Testing framework to ensure the application works as expected
- **Docker**: Containerization for easy deployment

## Installation

### Prerequisites

- **Node.js** and **npm** installed (Node.js version 14 or later)
- **Docker** installed (for containerization)

### Clone the Repository

```bash
git clone https://github.com/Defyinglight/todo-list-app.git
cd todo-list-app
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

This will start a local development server, and you can access the application at `http://localhost:5173`.

## Testing

To run the unit tests using Vitest, use:

```bash
npm run test
```

This will run all the tests to verify the functionality of the application.

## Docker Setup

To containerize and deploy the application using Docker:

1. **Build the Docker image**:

   ```bash
   docker build -t todo-list-app .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 8080:80 todo-list-app
   ```

   The application will be available at `http://localhost:8080`.

## Usage

1. **Add a Task**: Type a task description in the input box and click **Add** or press **Enter**.
2. **Edit a Task**: Click the **Edit** button next to a task to change its description.
3. **Complete a Task**: Check the box next to a task to mark it as completed.
4. **Delete a Task**: Click the **Delete** button to remove a task from the list.
5. **Filter Tasks**: Use the buttons to filter between **All**, **Completed**, and **Uncompleted** tasks.
