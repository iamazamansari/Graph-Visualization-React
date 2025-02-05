# React Flow Graph Visualization

An interactive graph visualization application using React Flow that allows users to manipulate and customize graph elements with undo/redo functionality.

## Features

### Graph Visualization

- Initializes with 10 interconnected nodes
- Nodes are draggable
- Smooth animations for graph interactions

### Node Customization

- **Color Modification**
  - Select any node to change its color using a color picker
  - Color changes are immediately reflected
  - Color history is stored for undo/redo functionality
- **Font Size Adjustment**
  - Modify node text size (supports standard sizes from 12px to 24px)
  - Changes are tracked for undo/redo
  - Ensures text remains readable at all sizes

### Undo/Redo Functionality

- Undo button to revert the last action
- Redo button to restore a reverted action
- Tracks the following actions:
  - Color changes
  - Font size modifications
  - Node position changes
- Maintains a history stack of all modifications

---

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd react-flow-graph
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

---

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project
- `npm run lint` - Runs ESLint to check for code quality issues
- `npm run preview` - Serves the built project

---

## Dependencies

```json
"dependencies": {
  "@reduxjs/toolkit": "^2.5.1",
  "@types/react-redux": "^7.1.34",
  "@xyflow/react": "^12.4.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-flow": "^1.0.3",
  "react-redux": "^9.2.0",
  "redux": "^5.0.1"
},
"devDependencies": {
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.17.0",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "typescript": "~5.6.2",
  "typescript-eslint": "^8.18.2",
  "vite": "^6.0.5"
}
```

---

## Basic Usage Guide

- The application starts with **10 interconnected nodes** visible on the screen.
- You can **drag nodes** to any position.
- To **change the color or font size** of a node:
  1. Select the node.
  2. Use the provided controls to modify its color and font size.
  3. The changes will be immediately reflected.
- The **Undo/Redo buttons** allow you to revert or restore actions such as:
  - Node position changes
  - Color modifications
  - Font size adjustments
- Due to **smooth animations**, undoing the position of a node may require multiple clicks.

Enjoy exploring Graph Visualization App made by Mohd Azam Ansari

Working demo deployment -- https://graph-visualization-react.vercel.app/
