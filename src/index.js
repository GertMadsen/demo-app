import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
