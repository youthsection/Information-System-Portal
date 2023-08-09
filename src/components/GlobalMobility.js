import React from "react";
import "./GlobalMobility.css";

function GlobalMobility() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white globalMobility__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">GLOBAL MOBILITY</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> Youth mobility
            within and beyond ASEAN through balanced and mutually beneficial
            cross-border cultural, educational, scientific exchange;
            qualification equivalencies, employment opportunities, and
            continuing professional development; international cooperation and
            other institutional linkages and partnership in order to contribute
            to knowledge transfer and cultivate new information and skills for
            the country. For Filipino youth to strengthen their ties with the
            Philippines.
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
              <th>YEAR 1</th>
              <th>YEAR 2</th>
              <th>YEAR 3</th>
              <th>PPAs</th>
              <th>Priority Areas</th>
              <th>Annual Budget</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Inadequate skills of youth to compete globally.</td>
              <td>
                Enhance/develop capacity of youth leaders to excel globally.
              </td>
              <td>Conduct seminars, trainings, and workshops twice a year</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>
                Foreign Language Course <hr />
                ICT related Trainings
              </td>
              <td>All 28 barangays</td>
              <td className="fw-bolder">75,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GlobalMobility;
