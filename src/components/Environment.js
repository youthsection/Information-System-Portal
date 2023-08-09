import React from "react";
import "./Environment.css";

function Environment() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white economicEmpowerment__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">ENVIRONMENT</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> Active
            engagement in planning, implementation, monitoring and evaluation of
            child and youth-friendly programs, policies and activities on
            environmental protection, climate change adaptation and mitigation
            and DRRM, with the use of new technologies and indigenous knowledge,
            so as to promote natural sustainable ecosystems and smarter
            localities, biodiversity conservation, waste management, and
            pollution control.
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
              <td>Improper waste disposal</td>
              <td>
                To promote the proper waste disposal and to provide sufficient
                information base on R.A. 9003.
              </td>
              <td>
                Conduct an environmental care activity thrice a year to campaign
                the welfare of our environment
              </td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>
                IEC on proper segregation of waste <hr />
                Symposium on RA 9003 (Solid Waste Management) <hr />
                Basket Trash <hr />
                Clean Up Drive (with 4ks Municipal Federation)
              </td>
              <td>
                All 28 Barangays <br />
                <br />
                <hr />
                All the School Institutions within the Municipality <hr />
                All 28 Barangays
              </td>
              <td className="fw-bolder">350,000.00</td>
            </tr>
            <tr>
              <td>Less populations of Native Trees Species.</td>
              <td>
                To reduce the impact of Climate Change and provide environmental
                conservation for the benefits of animals.
              </td>
              <td>Initiate at least 6 tree planting activities.</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>
                Establish Nabunturan Native Tree Nursery <hr />
                Conduct Tree Planting and Tree Nurturing Program
              </td>
              <td>28 Barangays</td>
              <td className="fw-bolder">50,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Environment;
