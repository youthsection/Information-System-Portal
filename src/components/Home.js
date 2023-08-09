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
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={lgu_yds_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block mb-2"
              />
            </div>
            <div className="col-md-3 col-sm-12 ">
              <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={mydc_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block mb-2"
              />
            </div>
            <div className="col-md-3 col-sm-12  ">
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={sk_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block mb-2"
              />
            </div>
            <div className="col-md-3 col-sm-12  ">
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={yds_logo}
                class="img-thumbnail object-fit-contain border rounded home__logo mx-auto d-block "
              />
            </div>
          </div>
          <br />
          <figure className="text-center">
            <blockquote className="blockquote">
              <motion.h2
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Municipality of Nabunturan
              </motion.h2>
            </blockquote>
            <blockquote className="blockquote">
              <motion.h5
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {" "}
                YOUTH INFORMATION SYSTEM
              </motion.h5>
            </blockquote>
          </figure>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            class="lead text-center bg-light text-dark home__p fw-bolder"
          >
            Vision
          </motion.p>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center "
          >
            By 2026, the Batan-ong Nabunturanon are empowered, fully equipped,
            globally competent, responsive to climate change, God fearing, and
            patriotic youth with equal access to quality education and equitable
            opportunities regardless of social status, diverse sexual
            orientation, gender identity and expression, religion and customs.
          </motion.p>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lead text-center bg-light text-dark home__p fw-bolder"
          >
            Mission
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
            esse earum atque et! Sint porro consequuntur doloribus iure. Aut
            eveniet illo soluta ut nobis eum nam minima optio nemo, quos quis
            sint rem est aperiam consequatur facere reprehenderit molestias
            consectetur et quia. Blanditiis ullam natus fugit animi corporis
            perferendis.
          </motion.p>
          {/* <p className="lead text-center bg-light text-dark home__p fw-bolder">
            Goals
          </p>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            commodi?
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
