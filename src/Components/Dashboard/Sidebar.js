import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import { faCartShopping, faUsers } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-bootstrap";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const menu = useContext(Menu);
  const isopen = menu.isopen;

  return (
    <div
      className="side-bar pt-3 "
      style={{ width: isopen ? "250px" : "fit-content" }}
    >
      <Link
        to={"Users"}
        className="d-flex align-items-center gap-2 m-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px " : "10px 12px" }}
          icon={faUsers}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Users
        </p>
      </Link>

      <Link
        to={"Products"}
        className="d-flex align-items-center gap-2 m-2 side-bar-link"
      >
        <FontAwesomeIcon
          style={{ padding: isopen ? "10px 8px 10px 15px " : "10px 12px" }}
          icon={faCartShopping}
        />
        <p className="m-0" style={{ display: isopen ? "block" : "none" }}>
          Products
        </p>
      </Link>
    </div>
  );
}
