import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MunicipalYouthDevelopmentCouncil from "./components/MunicipalYouthDevelopmentCouncil";
import SangguniangKabataan from "./components/SangguniangKabataan";
import Navbar from "./components/Navbar";
import YouthSection from "./components/YouthSection";
import VisionMission from "./components/VisionMission";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* <hr className="border border-success border-2" />
        <MunicipalYouthDevelopmentCouncil /> */}
        {/* <hr className="border border-success border-2" />
        <SangguniangKabataan /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/mypdc"
            element={<MunicipalYouthDevelopmentCouncil />}
          />
          <Route
            exact
            path="/sangguniang-kabataan"
            element={<SangguniangKabataan />}
          />
          <Route exact path="/youth-section" element={<YouthSection />} />
          <Route exact path="/vision-mission" element={<VisionMission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
