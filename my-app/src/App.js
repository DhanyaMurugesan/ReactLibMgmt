import React from 'react';
import Routes from './routes'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Managebook from './ManageBook/managebook';
import Addbook from './ManageBook/addbook';

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    
     <div className="App">
    
      <Routes />
    </div>
    </BrowserRouter>
   
  );
}}

export default App;
