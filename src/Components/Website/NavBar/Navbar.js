// import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../../Pages/Website/Home.css";

export default function Navbar() {
  return (
    <nav className="py-3">
      <Container>
        <div className=" d-flex align-items-center justify-content-between flex-wrap">
          <Link className="col-1" to="/">
            <img
              className=""
              width="200px"
              src={require("../../../Images/Orange Simple Online Shopping Logo (2).png")}
              alt="logo"
            />
          </Link>
          {/* <div className="col-12 col-md-5 order-md-2 order-3 mt-md-0 mt-3 position-relativ d-flex">
            <Form.Control
              type="search"
              className="form-control custom-search py-3
              rounded-0"
              placeholder="search product"
            />
            <h3
              className="btn btn-primary position-apsolute py-3  h-100 top-0 end-0 line-height m-0 px-3 rounded-0 d-flex align-items-center
                  justify-content-center"
            >
              Search
            </h3>
          </div> */}
          <div className="col-3 d-flex align-items-center justify-content-end gap-5 order-md-3 order-1">
            <Link to="/cart">
              <img
                width="30px"
                src={require("../../../Images/cart.png")}
                alt="cart"
              />
            </Link>
            <Link to="/profile">
              <img
                width="35px"
                src={require("../../../Images/profile.png")}
                alt="profile"
              />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
