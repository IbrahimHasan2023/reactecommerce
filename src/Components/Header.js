import { Link } from "react-router-dom";
export default function Header() {
  function handlelogout() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex flex-1">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
        <div className="d-flex">
          {!window.localStorage.getItem("email") ? (
            <>
              <Link
                to="/register"
                style={{ textAlign: "center" }}
                className="submit"
              >
                Register
              </Link>
              
              <Link
                to="/login"
                style={{ textAlign: "center" }}
                className="submit"
              >
                Login
              </Link>
            </>
          ) : (
            <div className="register_nav" onClick={handlelogout}>
              Log-OUt
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
