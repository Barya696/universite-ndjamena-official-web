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
import EtudiantsInternationaux from "./Components/Universites/International/EtudiantsInternationaux";
import ProgrammesEchange from "./Components/Universites/International/ProgrammesEchange";
import CooperationDoublesDiplomes from "./Components/Universites/International/CooperationDoublesDiplomes";
import Partenariats from "./Components/Universites/International/Partenariats";
import Nouvelles_Evenements from "./Components/Universites/Nouvelles_&_Evenements/Nouvelles_&_Evenements";
import Nouvelles from "./Components/Universites/Nouvelles_&_Evenements/Nouvelles";
import Evenements from "./Components/Universites/Nouvelles_&_Evenements/Evenements";
import CalendrierAcademique from "./Components/Universites/Nouvelles_&_Evenements/CalendrierAcademique";
import Communiques from "./Components/Universites/Nouvelles_&_Evenements/Communiques";
import Recherches from "./Components/Universites/Recherches/Recherches";
import LaboratoiresCentres from "./Components/Universites/Recherches/LaboratoiresCentres";
import Publications from "./Components/Universites/Recherches/Publications";
import AppelsProjets from "./Components/Universites/Recherches/AppelsProjets";
import AxesRecherche from "./Components/Universites/Recherches/AxesRecherche";
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
        path="/universite/international/etudiants-internationaux"
        element={
          <Mainlayout>
            <EtudiantsInternationaux />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/international/programmes-echange"
        element={
          <Mainlayout>
            <ProgrammesEchange />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/international/cooperation-doubles-diplomes"
        element={
          <Mainlayout>
            <CooperationDoublesDiplomes />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/international/partenariats"
        element={
          <Mainlayout>
            <Partenariats />
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
        path="/universite/nouvelles-evenements/nouvelles"
        element={
          <Mainlayout>
            <Nouvelles />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/nouvelles-evenements/evenements"
        element={
          <Mainlayout>
            <Evenements />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/nouvelles-evenements/calendrier-academique"
        element={
          <Mainlayout>
            <CalendrierAcademique />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/nouvelles-evenements/communiques"
        element={
          <Mainlayout>
            <Communiques />
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
        path="/universite/recherches/laboratoires-centres"
        element={
          <Mainlayout>
            <LaboratoiresCentres />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/recherches/publications"
        element={
          <Mainlayout>
            <Publications />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/recherches/appels-projets"
        element={
          <Mainlayout>
            <AppelsProjets />
          </Mainlayout>
        }
      />
      <Route
        path="/universite/recherches/axes-recherche"
        element={
          <Mainlayout>
            <AxesRecherche />
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
