import React from "react";
import "./Security.css";

function Security() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white security__h5">
            Center of Participation: <span className="fw-bolder">SECURITY</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> In promoting
            human security, including participation in peace building and
            conflict prevention and management initiatives, and public order and
            safety efforts, as well as in safeguarding national integrity and
            sovereignty to contribute to national peace and unity.
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

              <th>Annual Budget</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Presence of crimes involving youth as victims at night.</td>
              <td>To improve safety and security along the streets.</td>
              <td>
                Decrease by 50% of the crime rates involving youth and residents
                of the barangays.
              </td>
              <td>15%</td>
              <td>15%</td>
              <td>20%</td>
              <td>
                Installation of solar lights <hr />
                Installation of CCTVs
              </td>

              <td className="fw-bolder">1,000,000.00</td>
            </tr>
            <tr>
              <td>
                Presence of CICL (Children in Conflict with the Law) and
                recruitment of threat groups in the community, school, and
                social media
              </td>
              <td>
                To increase awareness of the importance of peace and order.
              </td>
              <td>
                Decrease by 50% the recruitment of groups in the community,
                school, and social media.
              </td>
              <td>20%</td>
              <td>20%</td>
              <td>10%</td>
              <td>
                Campus Peace Symposium <hr />
                Youth Peace Summit
              </td>

              <td className="fw-bolder">500,000.00</td>
            </tr>
            <tr>
              <td>Involvement of youth in road accidents.</td>
              <td>
                To decrease the number of road accidents involving the youth in
                the municipality
              </td>
              <td>
                Decrease by 50% the number of road accidents involving the youth
                in the municipality.
              </td>
              <td>20%</td>
              <td>20%</td>
              <td>10%</td>
              <td>
                Conduct safe driving and road discipline seminar. <hr />
                Installation of IEC signages along the highways and
                accident-prone areas.
              </td>

              <td className="fw-bolder">350,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Security;
