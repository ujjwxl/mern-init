# MERN Project Initializer

This script is a Node.js application designed to automate the setup of a basic MERN (MongoDB, Express.js, React.js, Node.js) stack project. It creates a directory structure, initializes a React frontend, and sets up an Express backend with necessary dependencies.

## Usage

### Prerequisites
- Node.js installed on your system

### Steps to Run
1. Save the provided script as `mern-init.js` in your project directory.
2. Navigate to the directory where you saved the `mern-init.js` script using the terminal or command prompt.
3. Run the script using Node.js:

    ```bash
    node mern-init.js
    ```

## Project Structure

- The script sets up a React frontend in a `client` directory using Vite as a bundler and creates directories for components and pages.
- An Express backend is initialized in a `server` directory, including necessary folders for routes, controllers, and models.
- Frontend and backend packages are installed automatically using npm.
- Unnecessary files in the React frontend (`App.jsx`, `index.css`, `App.css`) are cleared to provide a clean starting point.

## Important Note

This script will automatically delete itself (`main.js`) after setting up the project.

### Caution:
Make sure to run this script only in the directory where you want to create your MERN project as it will delete itself after execution.
