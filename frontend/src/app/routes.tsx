import { Routes, Route } from "react-router";
import Mainlayout from "./Components/Mainlayout";
import Homepage from "./Components/Homepage";
import Media from "./Components/Media/Media";
import Inscription from "./Components/Inscription/Inscription";
import Portail_Etudiant from "./Components/Portail_Etudiant/Portail_Etudiant";
import Bibliotheque from "./Components/Bibliothèque/Bibliothèque";
import Candidature from "./Components/Candidature/Candidature";

export default function AppRoutes() {
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
        path="/media"
        element={
          <Mainlayout>
            <Media />
          </Mainlayout>
        }
      />
      <Route
        path="/inscription"
        element={
          <Mainlayout>
            <Inscription />
          </Mainlayout>
        }
      />
      <Route
        path="/portail-etudiant"
        element={
          <Mainlayout>
            <Portail_Etudiant />
          </Mainlayout>
        }
      />
      <Route
        path="/bibliotheque"
        element={
          <Mainlayout>
            <Bibliotheque />
          </Mainlayout>
        }
      />
      <Route
        path="/candidature"
        element={
          <Mainlayout>
            <Candidature />
          </Mainlayout>
        }
      />
    </Routes>
  );
}
