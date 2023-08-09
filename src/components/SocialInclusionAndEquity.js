import React from "react";
import "./SocialInclusionAndEquity.css";

function SocialInclusionAndEquity() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h5 className="bg-success text-white socialInclusionAndEquity__h5">
            Center of Participation:{" "}
            <span className="fw-bolder">SOCIAL INCLUSION AND EQUITY</span>
          </h5>
          <p>
            <span className="fw-bolder">Agenda Statement:</span> In a peaceful
            and just society that affords them with equal and equitable,
            opportunity, social security and protection in all aspects of
            development, regardless of their gender, disability, specific need,
            political beliefs, ethnicity, religion and socio-cultural economic
            status.
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
                Misconception on Sexual Orientation, Gender Identity and
                Expression.
              </td>
              <td>
                To educate the youths of the different spectrum of gender.
              </td>
              <td>
                Conduct Symposium to at least 10 Secondary Schools in the
                Municipality
              </td>
              <td>4 Schools</td>
              <td>3 Schools</td>
              <td>3 Schools</td>
              <td>
                Series of SOGIE Orientation, Symposium and Forum
                <hr /> Gender and Sensitivity Seminar <hr />
                Celebration of Pride Month (LGBT Ball, Pride March)
              </td>
              <td>
                Bayabas NHS <br />
                New Sibonga NHS <br />
                Linda IS <br /> San Isidro IS
                <br /> NNCHS
                <br />
                Magsaysay NHS <br />
                Basak IS <br />
                Manat NHS
                <br /> Mainit NHS
                <br /> Kao NHS <br />
                Cabidianan NHS
              </td>
              <td className="fw-bolder">100,000.00</td>
            </tr>
            <tr>
              <td>
                Deteriorating culture and lack of cultural preservation and
                appreciation
              </td>
              <td>
                To educate the youth of the importance of cultural preservation
                and appreciation.
              </td>
              <td>
                Serve at least ten trainings that focuses on cultural
                preservation such as L’yurot Demonstration, Dialect Refresher
                Course, Basic Tribal Dances Training.
              </td>
              <td>4 trainings</td>
              <td>3 trainings</td>
              <td>3 trainings</td>
              <td>
                Commemoration of IPRA law, celebration of IP Month,
                demonstration of l’yurot, beads and accessories making. <hr />
                Establishment of school of living tradition
              </td>
              <td>IP Communities</td>
              <td className="fw-bolder">300,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SocialInclusionAndEquity;
