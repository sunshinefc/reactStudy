import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {LIST_VIEW,CHART_VIEW} from './utility';
import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';

const items=[
  {
    "id":1,
    "title":"去云南旅游",
    "price":200,
    "date":"2018-09-12",
    "category":{
      "id":1,
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  },
  {
    "id":2,
    "title":"去云南旅游",
    "price":400,
    "date":"2018-09-12",
    "category":{
      "id":1,
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  },
  {
    "id":3,
    "title":"去云南旅游",
    "price":300,
    "date":"2018-09-12",
    "category":{
      "id":1,
      "name":"旅行",
      "type":"outcome",
      "iconName":"ios-plane"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>welcome to react</h1>
      </header>
      <ViewTab activeTab={LIST_VIEW}
        onTabChange={(view)=>{console.log(view)}}/>
    </div>
  );
}

export default App;
