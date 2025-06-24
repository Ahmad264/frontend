import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildPage from "./pages/Build/BuildPage";
import ProjectDetail from "./pages/Build/ProjectDetail";
import UILibrary from "./pages/Build/UILibrary";
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
            <Route path="/build/project/:id" element={<ProjectDetail />} />
            <Route path="/build/midproject/:id" element={<ProjectDetail />} />
            <Route path="/build/ui" element={<UILibrary />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
