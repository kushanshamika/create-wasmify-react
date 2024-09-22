#!/usr/bin/env node

const { program } = require('commander');
const degit = require('degit');
const { execSync } = require('child_process');
const path = require('path');

program
  .version('1.0.0')
  .arguments('<project-name>')
  .description('Create a new React app with WebAssembly support')
  .action((projectName) => {
    // 1. Clone the template repository
    const emitter = degit('kushanshamika/wasmify-react', {
      cache: false,
      force: true,
      verbose: true,
    });

    console.log(`Creating new React-WASM project: ${projectName}`);
    emitter.clone(projectName).then(() => {
      console.log('Project created successfully!');

      // 2. Install dependencies
      console.log('Installing dependencies...');
      execSync('npm install', { cwd: path.resolve(projectName), stdio: 'inherit' });

      console.log('All done! Your project is ready to use.');
      console.log(`\nNavigate to your project folder and start the development server:`);
      console.log(`cd ${projectName} && npm start`);
    }).catch((err) => {
      console.error('Error creating project:', err);
    });
  });

program.parse(process.argv);
