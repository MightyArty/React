import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Instructor_Dash from "./Instructor/Instructor_Dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./StartPage/Login";
import { Chat } from "./Forum/Chat";
import Student_Dash from "./Student/Student_Dash";
import AddDive from "./Student/AddDive";
import ShowDives from "./Student/ShowDives";
import Weekly_Update from "./Schedule/Schedule";
import Student_Schedule from "./Schedule/Student_Schedule";
import DivesOfStudents from "./Instructor/DivesOfStudents";
import { AuthContextProvider } from "./context/AuthContext";
import { ApiContextProvider } from "./context/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ApiContextProvider>
          <Routes>
            <Route index element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="forum" element={<Chat />} />
            <Route path="schedule" element={<Weekly_Update />} />
            <Route path="student_schedule" element={<Student_Schedule />} />
            <Route path="instructor" element={<Instructor_Dash />} />
            <Route path="divesOfStudent" element={<DivesOfStudents />} />
            <Route path="student" element={<Student_Dash />} />
            <Route path="add_dive" element={<AddDive />} />
            <Route path="show_dives" element={<ShowDives />} />
          </Routes>
        </ApiContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
