import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage,
  ControlledFormPage, 
} from "./pages";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/counter" element={<CounterButtonPage/>} />
          <Route path="/people-list" element={<PeopleListPage/>} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/controlled" element={<ControlledFormPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
