import React from 'react';
import ReactDOM from 'react-dom';
import MyCv from './my-cv/my-cv.component';

// le service worker sort du cadre du cours, c'est lié à l'utilisation de l'app en tant que Progressive Web App
import registerServiceWorker from './my-cv/api/register-service-worker.js'; 

ReactDOM.render(<MyCv defaultLanguage='fr'/>, document.getElementById('root'));
registerServiceWorker();
