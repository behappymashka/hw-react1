import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sider/Sider";
import MainContainer from "./components/MainContainer/MainContainer";
import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="container">
          <Sidebar/>
              <MainContainer/>
        </div>
      </div>
  );
}

export default App;
