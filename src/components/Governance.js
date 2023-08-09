import React from "react";
import "./Governance.css";

function Governance() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white governance__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">GOVERNANCE</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> Involvement in
            local and national politics, and the government bureaucracy through
            programs, projects and activities by and for the youth.
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
              <th>TARGET YEAR 2</th>
              <th>YEAR 3</th>
              <th>PPAs</th>
              <th>Priority Areas</th>
              <th> Budget</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>
                Lack of understanding of roles and responsibilities of the SK
                and Youth Org. officials with their specific roles’ accordance
                with the law.
              </td>
              <td>
                To strengthen the youth leaders in terms of roles and
                responsibilities.
              </td>
              <td>
                Increase by 50% the knowledge and skills of youth leaders in
                handling their respective obligations.
              </td>
              <td>20%</td>
              <td>20%</td>
              <td>10%</td>
              <td>
                Events organizing Hosting Table Management Public Speaking Team
                Building Facilitation Administering of Focused Group Discussion
              </td>
              <td>
                All aspiring events youth coordinators within the locality.
              </td>
              <td className="fw-bolder">500,000.00</td>
            </tr>
            <tr>
              <td>
                Lack of best practices of PPAs being implemented in the locality
              </td>
              <td>
                To conduct on-site learnings and adapt the best practices of
                youth programs from another locality.
              </td>
              <td>
                Increase by 50% the involvement of the best practices of the
                PPAs youth programs.
              </td>
              <td>15%</td>
              <td>15%</td>
              <td>20%</td>
              <td>On-site Learning</td>
              <td>All MYDC and SK Officials</td>
              <td className="fw-bolder">500,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Governance;
