import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage,
  ControlledFormPage, 
  UncontrolledFormPage,
} from "./pages";
import { NavBar } from "./NavBar";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/counter" element={<CounterButtonPage/>} />
            <Route path="/people-list" element={<PeopleListPage/>} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/controlled" element={<ControlledFormPage />} />
            <Route path="/uncontrolled" element={<UncontrolledFormPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
