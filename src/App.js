import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage,
  ControlledFormPage, 
  UncontrolledFormPage,
  UserProfilePage,
} from "./pages";
import { UserDataLoader } from "./UserDataLoader";
import { NavBar } from "./NavBar";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {

  return (
    <ThemeContext.Provider value="light">
      <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/counter" element={<CounterButtonPage/>} />
            <Route path="/people-list" element={<PeopleListPage/>} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/user" element={
              <UserDataLoader>
                <UserProfilePage />
              </UserDataLoader>
            } />
            <Route path="/controlled" element={<ControlledFormPage />} />
            <Route path="/uncontrolled" element={<UncontrolledFormPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
