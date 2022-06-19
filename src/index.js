import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "This is a sample task. You can edit it or delete it and add your own. Try it now!", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialTasks={DATA} />
  </React.StrictMode>
);