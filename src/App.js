import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildPage from "./pages/Build/BuildPage";
import MiniProjectDetail from "./pages/Build/MiniProjectDetail";
import UnderConstruction from "./pages/Build/UnderConstruction";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <div className="pt-24 min-h-screen"> {/* Add top padding for fixed navbar */}
          <Routes>
            <Route path="/" element={<BuildPage />} />
            <Route path="/build/project/:id" element={<MiniProjectDetail />} />
            <Route path="/build/ui" element={<UnderConstruction />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;