import React from "react";
import "./EconomicEmpowermentPlan.css";
import YouthSectionLogos from "./YouthSectionLogos";

function EconomicEmpowermentPlan() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white economicEmpowerment__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">ECONOMO EMPOWERMENT</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> As empowered
            employees and/or entrepreneurs who are productively engaged in
            meaningful and decent work and/or businesses, and protected from
            work-related vulnerabilities such as discrimination,
            underemployment, undue contractualization, occupational hazards and
            child labor.
          </p>
        </div>
      </div>
      <div className="row">
        <table className="table table-hover table-responsive">
          <thead className="text-center">
            <tr>
              <th>Youth Development Concerns</th>
              <th>Objectives</th>
              <th>Performance Indicator</th>
              <th>YEAR</th>
              <th>YEAR</th>
              <th>YEAR</th>
              <th>PPAs</th>
              <th>Priority Areas</th>
              <th>Annual Budget</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Less Job opportunities for jobseekers</td>
              <td>To provide opportunities for the jobseekers.</td>
              <td>
                Launch one job fair every year to help address unemployment rate
                in the Municipality
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>MYDC Job Fair</td>
              <td>28 Barangays</td>
              <td className="fw-bolder">100,000.00</td>
            </tr>
            <tr>
              <td>Lack of avenue for young entrepreneurs</td>
              <td>
                To provide opportunities for the young entrepreneurs to showcase
                their crafts and products.
              </td>
              <td>
                Launch one Bazaar every year to help the young entrepreneur to
                showcase their crafts and products
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>MYDC Bazaar</td>
              <td>28 Barangays</td>
              <td className="fw-bolder">500,000.00</td>
            </tr>
            <tr>
              <td>Growing and persistent youth unemployment.</td>
              <td>To offer income generating projects among youths.</td>
              <td>Conduct a sustainable livelihood training twice a year.</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>Livelihood Trainings in partnership with CTEC and TESDA</td>
              <td>28 Barangays</td>
              <td className="fw-bolder">300,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EconomicEmpowermentPlan;
