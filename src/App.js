import "./App.css";
import MunicipalYouthDevelopmentCouncil from "./components/MunicipalYouthDevelopmentCouncil";
import SangguniangKabataan from "./components/SangguniangKabataan";

function App() {
  return (
    <div className="App">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>YOUTH INFORMATION SYSTEM</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Municipality of Nabunturan
        </figcaption>
      </figure>
      <hr className="border border-success border-2" />
      <MunicipalYouthDevelopmentCouncil />
      <hr className="border border-success border-2" />
      <SangguniangKabataan />
    </div>
  );
}

export default App;
