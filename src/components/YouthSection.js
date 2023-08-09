import React from "react";
import "./YouthSection.css";
import HealthPlan from "./HealthPlan";
import EducationPlan from "./EducationPlan";
import YouthSectionLogos from "./YouthSectionLogos";
import EconomicEmpowermentPlan from "./EconomicEmpowermentPlan";
import SocialInclusionAndEquity from "./SocialInclusionAndEquity";
import Security from "./Security";
import Governance from "./Governance";
import ActiveCitizenship from "./ActiveCitizenship";
import Environment from "./Environment";
import GlobalMobility from "./GlobalMobility";

function YouthSection() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <h2 className="text-center text-white bg-success youthSection__h2">
          LOCAL YOUTH DEVELOPMENT PLAN (LYDP)
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <span className="fw-bolder">Region:</span> XI
        </div>
        <div className="col-md-4 text-center">
          <span className="fw-bolder">Province:</span> Davao De Oro
        </div>
        <div className="col-md-4 text-center">
          <span className="fw-bolder">Municipality:</span> Nabunturan
        </div>
      </div>
      <HealthPlan />
      <YouthSectionLogos />
      <EducationPlan />
      <YouthSectionLogos />
      <EconomicEmpowermentPlan />
      <YouthSectionLogos />
      <SocialInclusionAndEquity />
      <YouthSectionLogos />
      <Security />
      <YouthSectionLogos />
      <Governance />
      <YouthSectionLogos />
      <ActiveCitizenship />
      <YouthSectionLogos />
      <Environment />
      <YouthSectionLogos />
      <GlobalMobility />
      <YouthSectionLogos />
    </div>
  );
}

export default YouthSection;
