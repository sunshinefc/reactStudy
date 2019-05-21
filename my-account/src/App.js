import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './containers/Home';

class App extends React.Component {
  render(){
    return (
      <div className="App">
       <Home/>
      </div>
    );
  }
}

export default App;
