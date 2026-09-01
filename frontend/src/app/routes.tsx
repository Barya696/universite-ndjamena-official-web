import { Routes, Route } from "react-router";
import Mainlayout from "./Components/Mainlayout";
import Homepage from "./Components/Homepage";
import Media from "./Components/Media/Media";
import A_propos from "./Components/Universites/A_propos/A_propos";
import HistoireMission from "./Components/Universites/A_propos/HistoireMission";
import MotRecteur from "./Components/Universites/A_propos/MotRecteur";
import Gouvernance from "./Components/Universites/A_propos/Gouvernance";
import ChiffresCles from "./Components/Universites/A_propos/ChiffresCles";
import NosPolitiques from "./Components/Universites/A_propos/NosPolitiques";
import Personels from "./Components/Universites/A_propos/Personels";
import Formations from "./Components/Universites/Formations/Formations";
import License from "./Components/Universites/Formations/License";
import Master from "./Components/Universites/Formations/Master";
import Doctorat from "./Components/Universites/Formations/Doctorat";
import ResourcesAcademique from "./Components/Universites/Formations/ResourcesAcademique";
import International from "./Components/Universites/International/International";
import Nouvelles_Evenements from "./Components/Universites/Nouvelles_&_Evenements/Nouvelles_&_Evenements";
import Recherches from "./Components/Universites/Recherches/Recherches";
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
        path="/universite/a-propos"
        element={
          <Mainlayout>
            <A_propos />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/a-propos/histoire-mission"
        element={
          <Mainlayout>
            <HistoireMission />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/a-propos/mot-recteur"
        element={
          <Mainlayout>
            <MotRecteur />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/a-propos/gouvernance"
        element={
          <Mainlayout>
            <Gouvernance />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/a-propos/chiffres-cles"
        element={
          <Mainlayout>
            <ChiffresCles />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/a-propos/nos-politiques"
        element={
          <Mainlayout>
            <NosPolitiques />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/a-propos/personels"
        element={
          <Mainlayout>
            <Personels />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/formations"
        element={
          <Mainlayout>
            <Formations />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/formations/license"
        element={
          <Mainlayout>
            <License />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/formations/master"
        element={
          <Mainlayout>
            <Master />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/formations/doctorat"
        element={
          <Mainlayout>
            <Doctorat />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/formations/resources-academique"
        element={
          <Mainlayout>
            <ResourcesAcademique />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/international"
        element={
          <Mainlayout>
            <International />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/nouvelles-evenements"
        element={
          <Mainlayout>
            <Nouvelles_Evenements />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/recherches"
        element={
          <Mainlayout>
            <Recherches />
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
