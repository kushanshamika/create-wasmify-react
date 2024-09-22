# Create Wasmify React

![Placeholder for Logo](https://i.ibb.co/bgK0FmQ/wasify-react.png)

A boilerplate tool to generate a React application pre-configured with WebAssembly (WASM) support.

---

## Links

- **[User Guide](#)**: Detailed documentation on how to use Create Wasmify React.
- **[Report an Issue](https://github.com/kushanshamika/create-wasmify-react/issues)**: Found a bug? Help us improve by reporting it.

---

## Quick Overview

To create a new project with **Create Wasmify React**, run the following commands:

```bash
npx create-wasmify-react my-app
cd my-app
npm start
```

This will create a new React project with WebAssembly (WASM) support ready to use. You can then start building your app immediately!

---

## Framework Structure

When you create a new project using **Create Wasmify React**, you will get the following directory structure:

```
my-app/
├── node_modules/
├── public/
│   ├── wasm/
│   │   └── build
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── hooks/
│   │   └── useWASM.js
│   ├── wasm/
│   │   └── go/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── logo.svg
│   └── wasm-setup.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

- **`public/`**: Contains the static assets like the HTML file and favicon.
- **`src/`**: Main directory for React components and WebAssembly modules.
  - **`wasm/go`**: Directory to store the `.go` files.
  - **`hooks/useWASM.js`**: React hook that imports the WebAssembly modules.
- **`.gitignore`**: Files and folders ignored by Git.
- **`package.json`**: Contains project dependencies and scripts.
  
---

Enjoy building your next WASM-powered React application with **Create Wasmify React**!
