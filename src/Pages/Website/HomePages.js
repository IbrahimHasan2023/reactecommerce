import { Container } from "react-bootstrap";
import Navbar from "../../Components/Website/NavBar/Navbar";
import { Link } from "react-router-dom";
export default function HomePages() {
  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center justify-content-between flex-wrap hand">
        <Container>
          <div className="col-lg-5 col-md-8 col-12 text-md-start text-center">
            <h1 className="display-3 fw-bold ">Nuts</h1>
            <h4 style={{ color: "black" }} className="fw-normal">
              Welcome to Our Shop Here you can choose a nuts that matches your
              personal preferences . Happy Shopping!
            </h4>

            <Link
              to="/dashboard/products"
              className="btn btn-primary mt-3 py-4 fw-bold text-light"
            >
              Shop now
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

//import React from "react";
// import { motion } from "framer-motion";

// export default function HomePages() {
//   const word = "Welcome";}

{
  /* <div className="App">
        <h1>Home Pages</h1>

        <motion.div
          className="top-19px d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} // Customize animation duration
          style={{ fontSize: "90px", fontWeight: "bold", color: "#7731D8" }} // Set font size
        >
          {word.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Delay each character
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div> */
}
