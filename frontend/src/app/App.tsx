import { Routes, Route } from "react-router";
import MainLayout from "./MainLayout";
import Homepage from "./Homepage";
import StudentLogin from "./StudentLogin";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Homepage />
          </MainLayout>
        }
      />
      <Route
        path="/portail-etudiant"
        element={
          <MainLayout>
            <StudentLogin />
          </MainLayout>
        }
      />
    </Routes>
  );
}
