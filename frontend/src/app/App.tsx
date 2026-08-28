import { Routes, Route } from "react-router";
import Mainlayout from "./Components/Mainlayout";
import Homepage from "./Components/Homepage";
import StudentLogin from "./Components/Student/StudentLogin";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Mainlayout>
            <Homepage />
          </Mainlayout>
        }
      />
      <Route
        path="/portail-etudiant"
        element={
          <Mainlayout>
            <StudentLogin />
          </Mainlayout>
        }
      />
    </Routes>
  );
}
