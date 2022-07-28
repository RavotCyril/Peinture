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
import { ThemeProvider, SurveyProvider } from "../src/utils/context";

// /* Importations des pages de styles + logo + images */

import "../src/Styles/App.css";


/* Prop de rendu de la page Index avec toute les routes des components - pages de l'application  */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={< Presentation />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Fiche" element={< Fiche />} />
                        <Route path="/Infos" element={< Infos />} />
                        <Route path="/MesCreations" element={< MesCreations />} />
                        <Route path="/Vendue" element={< Vendue />} />
                        <Route path="/VosDesirs" element={< VosDesirs />} />
                        <Route path="/RevueDePresse" element={< RevueDePresse />} />
                        <Route path="*" element={< Error />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
