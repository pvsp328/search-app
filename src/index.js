import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './Containers/App';

import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
