import React from 'react';
import './App.scss';
import MainLayout from "./layouts/main-layout/MainLayout";
import Router from "./pages";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router/>
      </MainLayout>
    </div>
  );
}

export default App;
