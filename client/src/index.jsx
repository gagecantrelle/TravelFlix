import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import './styles.css';



const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);




////edit
// //import React from 'react';
// import ReactDom from 'react-dom';
// import App from './components/App';
// // import './styles.css';



// // const container = document.getElementById('app');
// // const root = createRoot(container);
// // root.render(<App tab="home" />);
// ReactDom.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('app'))