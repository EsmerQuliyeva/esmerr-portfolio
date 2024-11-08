import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(<App />, document.querySelector('#root'));

// import ReactDOM from "react-dom";
// import App from 'App';




// // Initial render
// root.render(<App name="Saeloun blog" />);

// // During an update, there is no need to pass the container again
// root.render(<App name="Saeloun testimonials" />);