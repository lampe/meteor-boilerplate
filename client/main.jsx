import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/components/app.jsx';

// Render app
Meteor.startup(()=>{
  ReactDOM.render(<App/>, document.getElementById('root'));
});
