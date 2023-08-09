import React from "react";
import "./HealthPlan.css";

function HealthPlan() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success  text-white healthPlan__h5">
            Center of Participation: <span className="fw-bolder">HEALTH</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> It is of utmost
            importance to give high priority in addressing the youth sector's
            health aspect as it serves as their basic foundation to be able to
            respond to or perform all the other centers of participation that
            need their involvement.
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
              <th>2024</th>
              <th>Target 2025</th>
              <th>2026</th>
              <th>PPAs</th>
              <th>Priority Areas</th>
              <th>Annual Budget</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>
                Presence of youth involve in pre-marital sex resulting to
                teenage pregnancy.
              </td>
              <td>
                To deepen the understanding about the effects of premarital sex
                among youths. <hr />
                To minimize the cases of teenage pregnancy.
              </td>
              <td>
                Conduct three symposiums every year with regards to the negative
                effects of premarital sex that includes unprepared for the
                future. <hr /> Conduct nine symposiums about avoiding teenage
                pregnancy.
              </td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>
                Symposium <br /> Sex Education Forum <br /> Distribution IEC
                Materials
              </td>
              <td>Schools</td>
              <td className="fw-bolder">150,000.00</td>
            </tr>
            <tr>
              <td>
                Presence of youths involves in vices such as smoking, gambling,
                drugs, and substance abuse.
              </td>
              <td>To mitigate the youth engagement in vices.</td>
              <td>
                Conduct three symposiums every year about the negative effect of
                vices to health.
              </td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>
                Enrollment to Smoking Cessation Sessions <hr />
                Symposium <hr /> Distribution of IEC Materials
              </td>
              <td>28 Barangays</td>
              <td className="fw-bolder">150,000.00</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="fw-bolder"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HealthPlan;
