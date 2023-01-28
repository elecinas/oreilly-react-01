import logo from "./logo.svg";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage } from "./pages";
import { CongratulationsMessage } from "./CongratulationsMessage";
import { CounterButton } from "./CounterButton";
import "./App.css";
import { Greeting } from "./Greeting";
import { PeopleList } from "./PeopleList";

function App() {
  let adjective = "cool";
  let url = "https://reactjs.org";
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">

      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/counter" element={<CounterButtonPage/>} />
          <Route path="/people-list" element={<PeopleListPage/>} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
