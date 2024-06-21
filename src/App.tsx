import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import WireGuard from "./pages/WireGuard";
import Vpn from "./pages/Vpn";
import Terminal from "./pages/Terminal";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/wireguard" element={<WireGuard />} />
          <Route path="/vpn" element={<Vpn />} />
          <Route path="/terminal" element={<Terminal />} />
          {/* <Route path="/personal-vpn" element={<PersonalVpn />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brandname" element={<BrandName />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
