import React from "react";
import "./ActiveCitizenship.css";

function ActiveCitizenship() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white citizenship__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">ACTIVE CITIZENSHIP</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> In community
            development and nation building through meaningful, active,
            sustainable, productive and patriotic engagement in civil, society,
            social mobilization, volunteerism (indicating social awareness and
            socio-civic mindedness), and values formation (such as having
            concern for others and being socially responsible) so as to improve
            the plight of the youth.
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
              <td>
                Lack of courage to participate and showcase their talents,
                skills, and capacity as a youth.
              </td>
              <td>
                To promote camaraderie and build community spirits. Avenue to
                develop artistic and leadership of the youth by strengthening
                their participation.
              </td>
              <td>
                2,000 youth participated and competed in the celebration of
                Municipal Linggo ng Kabataan
              </td>
              <td>
                500 Batan Ong Nabunturano n participated the celebration of
                Municipal Linggo ng Kabataan
              </td>
              <td>
                500 Batan Ong Nabunturano n participated the celebration of
                Municipal Linggo ng Kabataan
              </td>
              <td>
                1,000 Batan Ong Nabunturano n participated the celebration of
                Municipal Linggo ng Kabataan
              </td>
              <td>Municipal Linggo ng Kabataan</td>
              <td>28 Barangays</td>
              <td className="fw-bolder">300,000.00</td>
            </tr>
            <tr>
              <td>
                Lack of self-discipline in using social media that results to
                uninterested in sports activities.
              </td>
              <td>To promote sportsmanship and camaraderie among athletes.</td>
              <td>
                Conduct at least 3 sports activities every year to engage the
                youths in sports.
              </td>
              <td>3 sport activities</td>
              <td>3 sport activities</td>
              <td>3 sport activities</td>
              <td>
                Summer Sports Festival <hr />
                Sports Development Program
              </td>
              <td>28 Barangays</td>
              <td className="fw-bolder">500,000.00</td>
            </tr>
            <tr>
              <td>
                Lack of engagement and development for spiritual aspect among
                youths
              </td>
              <td>
                To engage and develop the spiritual aspect of the youths in the
                municipality
              </td>
              <td>Conduct at least 1 youth camp every year</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>Youth Camp</td>
              <td>28 Barangays</td>
              <td className="fw-bolder">300,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveCitizenship;
