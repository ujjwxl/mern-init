# MERN Project Initializer

This script is a Node.js application designed to automate the setup of a basic MERN (MongoDB, Express.js, React.js, Node.js) stack project. It creates a directory structure, initializes a React frontend, and sets up an Express backend with necessary dependencies.

## Usage

### Prerequisites
- Node.js installed on your system

### Steps to Run
1. Save the provided script as `main.js` in your project directory.
2. Navigate to the directory where you saved the `main.js` script using the terminal or command prompt.
3. Run the script using Node.js:

    ```bash
    node main.js
    ```

## Project Structure

- The script sets up a React frontend in a `client` directory using Vite as a bundler and creates directories for components and pages.
- An Express backend is initialized in a `server` directory, including necessary folders for routes, controllers, and models and `mongoose` package for MongoDB.
- Frontend and backend packages are installed automatically using npm.
- Unnecessary boilerplate code in the React frontend (`App.jsx`, `index.css`, `App.css`) are cleared to provide a clean starting point.

## Important Note

This script will automatically delete itself (`main.js`) after setting up the project.

### Caution:
Make sure to run this script only in the directory where you want to create your MERN project as it will delete itself after execution.
