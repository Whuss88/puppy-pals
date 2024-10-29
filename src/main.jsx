import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

const rootElement = document.getElementById('root');
const root = rootElement._reactRootContainer || createRoot(rootElement);
if (!rootElement._reactRootContainer) {
  rootElement._reactRootContainer = root;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
