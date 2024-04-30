import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import Logout from "../../Pages/auth/Logout";

export default function Topbar() {
  const menu = useContext(Menu);
  const setIsopen = menu.setIsopen;

  //function handleLogout
  function handlelogout() {
    // const userId = localStorage.getItem("userId");
    // window.localStorage.removeItem("userId");
    window.location.pathname = "/login";
  }

  return (
    <div className="Top-bar ">
      <div className="d-flex align-items-center justify-content-between h-100">
        <div className="d-flex align-items-center gap-4">
          <h3>E-commerce</h3>
          <FontAwesomeIcon
            onClick={() => setIsopen((prev) => !prev)}
            cursor={"pointer"}
            icon={faBars}
          />
        </div>
        <div style={{width:"130px"}} className="submit-l" onClick={handlelogout}>
          <Logout />
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </div>
    </div>
  );
}
