import React from "react";
import UserPersonalDetail from "./components/UserPersonalDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbox from "./components/Inbox";
import Matches from "./components/Matches";
import NavBar from "./components/NavBar";
import { ProfileBar } from "./components/ProfileBar";
import Home from "./pages/Home";

import PartenerInfo from "./components/PartenerInfo";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileBar />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/myprofile" element={<UserPersonalDetail />} />
        <Route path="/mypreference" element={<PartenerInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
