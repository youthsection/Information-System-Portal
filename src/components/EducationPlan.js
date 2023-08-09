import React from "react";
import "./EducationPlan.css";

function EducationPlan() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white educationPlan__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">EDUCATION</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> In accessible,
            developmental, quality and relevant formal, non-formal and informal
            lifelong learning and training that prepares graduates to be
            globally competitive and responsive to national needs and to prepare
            them for the workplace and the emergence of new media and other
            technology.
          </p>
        </div>
      </div>
      <div className="row">
        <table className="table table-hover table-responsive ">
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
              <td>Presence of out of school youth</td>
              <td>To encourage the OSY to pursue their studies.</td>
              <td>
                Additional enrollees to ALS at least 50 OSYs every year both
                from Nabunturan East and West ALS Districts
              </td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>
                Support to ALS Provide Monetary incentives to ALS completers
              </td>
              <td>
                28 Barangays <hr /> Nabunturan East and West ALS Districts{" "}
              </td>
              <td className="fw-bolder">350,000.00</td>
            </tr>
            <tr>
              <td>Inadequate School Supplies</td>
              <td>To provide School supplies to the inschool youth</td>
              <td>
                Distribute school kits to 100 beneficiaries every year both in
                secondary and tertiary learners.
              </td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>
                Distribution of 50 school kits to secondary learners (Notebook,
                Paper, Ballpen, Bag)
                <hr />
                Distribution of 50 school kits to College Students (Flash
                drives, Paper, Ballpen, Binder)
              </td>
              <td>Selected and deserving beneficiaries within 28 barangays.</td>
              <td className="fw-bolder">300,000.00</td>
            </tr>
            <tr>
              <td>Lack of skills and workshops in public speaking.</td>
              <td>To engage youths in public speaking</td>
              <td>
                Conduct capability development trainings and seminars twice a
                year to 25 aspiring public speakers.
              </td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>
                Literary Day <hr />
                Debate Tournament <hr />
                Hosting and Event Organizing Workshop
              </td>
              <td>Schools and 28 Barangays</td>
              <td className="fw-bolder">500,000.00</td>
            </tr>
            <tr>
              <td>
                Lack of reading materials for reading centers such as books,
                magazines, and other informative materials
              </td>
              <td>
                To provide reading materials towards the established reading
                centers
              </td>
              <td>
                Distribute at least 50 books with different titles to the
                existing reading centers.
              </td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>Distribution of Books </td>
              <td>Established Reading centers </td>
              <td className="fw-bolder">700,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EducationPlan;
