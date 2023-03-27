import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';
// import './styles.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
