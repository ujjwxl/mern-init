const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function createMERNProject() {
  exec(
    "npm create vite@latest client -- --template react",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      console.log(`React project initialized successfully.`);
      installFrontendPackages();
    }
  );
}

function installFrontendPackages() {
  const frontendPath = path.join(__dirname, "client");
  process.chdir(frontendPath);
  exec("npm install", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Frontend packages installed successfully.`);
    createBackendFolder();
  });
}

function createBackendFolder() {
  const backendPath = path.join(__dirname, "server");

  fs.mkdir(backendPath, (err) => {
    if (err) {
      console.error(`Error creating backend directory: ${err}`);
      return;
    }
    console.log(`'backend' directory created.`);
    process.chdir(backendPath);
    createBackendProjectStructure();
  });
}

function createBackendProjectStructure() {
  exec("npm init -y", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Backend project initialized successfully.`);
    installBackendPackages();
  });
}

function installBackendPackages() {
  exec("npm install express mongoose", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Backend packages installed successfully.`);
    createBackendFolders();
  });
}

function createBackendFolders() {
  const backendFolders = ["routes", "controllers", "models"];

  backendFolders.forEach((folder) => {
    fs.mkdir(folder, (err) => {
      if (err) {
        console.error(`Error creating ${folder} directory: ${err}`);
        return;
      }
      console.log(`${folder} directory created.`);
    });
  });

  finalizeProjectSetup();
}

function clearFiles() {
  const clientPath = path.join(__dirname, "client");
  const filesToClear = ["App.jsx", "index.css", "App.css"];

  filesToClear.forEach((file) => {
    const filePath = path.join(clientPath, "src", file);
    fs.writeFile(filePath, "", (err) => {
      if (err) {
        console.error(`Error clearing ${file}: ${err}`);
        return;
      }
      console.log(`${file} cleared.`);
    });
  });
}

function createClientFolders() {
  const clientPath = path.join(__dirname, "client");
  const foldersToCreate = ["components", "pages"];

  foldersToCreate.forEach((folder) => {
    const folderPath = path.join(clientPath, folder);
    fs.mkdir(folderPath, (err) => {
      if (err) {
        console.error(`Error creating ${folder} directory: ${err}`);
        return;
      }
      console.log(`${folder} directory created.`);
    });
  });
}

function finalizeProjectSetup() {
  clearFiles();
  createClientFolders();
  deleteSelf(); 
}

function deleteSelf() {
  const currentFilePath = path.join(__dirname, 'main.js');
  fs.unlink(currentFilePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted successfully.');
    }
  });
}

createMERNProject();