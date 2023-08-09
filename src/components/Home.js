import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import lgu_yds_logo from "../images/lgu_yds_logo.png";
import mydc_logo from "../images/mydc_logo.png";
import serbisyo_sa_gugma_logo from "../images/serbisyo_sa_gugma_logo.png";
import yds_logo from "../images/yds_logo.png";
import sk_logo from "../images/sk_logo.png";

function Home() {
  return (
    <div>
      <br />
      <div className="container">
        <div class="jumbotron">
          <div className="row">
            <div className="col-md-3 col-sm-12  ">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={lgu_yds_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block mb-2"
              />
            </div>
            <div className="col-md-3 col-sm-12 ">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={mydc_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block mb-2"
              />
            </div>
            <div className="col-md-3 col-sm-12  ">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={sk_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block mb-2"
              />
            </div>
            <div className="col-md-3 col-sm-12  ">
              <motion.img
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={yds_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block "
              />
            </div>
          </div>
          <br />
          <figure className="text-center">
            <blockquote className="blockquote">
              <h2>Municipality of Nabunturan</h2>
            </blockquote>
            <blockquote className="blockquote">
              <h5> YOUTH INFORMATION SYSTEM</h5>
            </blockquote>
          </figure>
          <div className="row">
            <div className="col text-center">
              <p class="lead text-center bg-light text-dark home__p fw-bolder home__vision">
                Vision
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p className="text-center ">
                {" "}
                Enable, involved, and patriotic youth realizing their
                aspirations anchored on integrity and compassion{" "}
              </p>
              <ul class="list-group ">
                <li
                  class="list-group-item text-center active"
                  aria-current="true"
                >
                  Specifically, by 2023, Batan-ong Nabunturanon can be described
                  as:
                </li>
                <li class="list-group-item">
                  Batan-ong Nabunturan are empowered, vigorous, educated,
                  patriotic and active both in government and civil society
                  endeavours living in a peaceful, secure,and socially-inclusive
                  civilization where respect and equality across gender
                  preferences, faiths, and cultures exist.
                </li>
                <li class="list-group-item">
                  Batan-ong Nabunturan are engaged in productive economic
                  activity in the locality having full responsibility on the
                  access of technology, information, and services for the
                  betterment of society.
                </li>
                <li class="list-group-item">
                  Bantan-ong Nabunturan have access to technology, information,
                  and services for the betterment of society.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <p className="lead text-center bg-light text-dark home__p fw-bolder home__vision">
            Mission
          </p>
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <p
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center "
              >
                Provide equitable access <br />
                to culturally sensitive, inclusive and meaningful programs that
                will transform and hone youth as future leaders in the
                municipality.
              </p>
            </div>
          </div>

          <p className="lead text-center bg-light text-dark home__p fw-bolder home__vision">
            Guiding Principles
          </p>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p className="text-center ">
                <span className="fw-bolder">
                  Patriotic: <br />{" "}
                </span>{" "}
                We will strive hardin upholding the best interest and
                aspirations of Davao de Oro Youth in realizing endeavours for
                personal and professional growth and the betterment of the
                nation.
              </p>
              <p className="text-center ">
                <span className="fw-bolder">
                  Involved: <br />
                </span>{" "}
                We will ensure proactive participation of the youth in the
                planning, implementation and evaluation of youth programs. Thus,
                engaging the youth to take part voluntarily in any government
                initiatives.
              </p>
              <p className="text-center ">
                <span className="fw-bolder">
                  Enabled: <br />
                </span>{" "}
                We will developed the youth to become empowered that will enable
                them to take actions on societal issues concerning them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
