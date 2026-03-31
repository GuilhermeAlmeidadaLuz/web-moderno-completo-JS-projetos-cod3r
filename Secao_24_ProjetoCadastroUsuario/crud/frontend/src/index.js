import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './main/App';   // Aula 420. Criando Componentes (Template)
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();