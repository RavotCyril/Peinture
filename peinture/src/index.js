/* Importations de react - react-dom - BrowserRouter - Router, Route, Routes  */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Importations Components */
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

/* Importations Pages */

import Presentation from "./pages/Presentation";
import MesCreations from "./pages/MesCreations";
import VosDesirs from "./pages/VosDesirs";
import RevueDePresse from "./pages/RevueDePresse";
import Infos from "./pages/Infos";
import Fiche from "./pages/Fiche";
import Vendue from "./pages/Vendue"

// /* Importations des pages de styles + logo + images */

import "../src/Styles/App.css";


/* Prop de rendu de la page Index avec toute les routes des components - pages de l'application  */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/Presentation" element={< Presentation />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/Signup" element={<Signup />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/Login" element={<Login />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/Fiche" element={< Fiche />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/Infos" element={< Infos />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/MesCreations" element={< MesCreations />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/Vendue" element={< Vendue />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/VosDesirs" element={< VosDesirs />} />
                <Route path="http://jpqlxdm.cluster030.hosting.ovh.net/RevueDePresse" element={< RevueDePresse />} />
                <Route path="*" element={< Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
