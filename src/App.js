import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuildPage from "./pages/Build/BuildPage";
import MiniProjectDetail from "./pages/Build/MiniProjectDetail";
import UnderConstruction from "./pages/Build/UnderConstruction";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BuildPage />} />
          <Route path="/build/project/:id" element={<MiniProjectDetail />} />
          <Route path="/build/ui" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;