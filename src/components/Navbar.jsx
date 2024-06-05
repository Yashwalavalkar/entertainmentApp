//this is an navbar
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark m-3"
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        color: "transparent",
        borderRadius: "30px",
      }}
    >
      <div className="container-fluid">
        <h2
          className="m-3 font-weight-bold"
          style={{
            color: "cyan",
            fontSize: "50px",
          }}
        >
          <b>T-Flix</b>
        </h2>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          {/* herre useses a conditional rendering */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1 fs-5 active"
                  to="/login"
                >
                  <b>Login</b>
                </Link>
                <Link
                  className="btn bg-white text-success mx-1 fs-5 active"
                  to="/createuser"
                >
                  <b>Signup</b>
                </Link>
                <Link
                  to="/about"
                  className="btn bg-white text-success mx-1 fs-5 active"
                >
                  <b>About</b>
                </Link>
              </div>
            ) : (
              <div className="d-flex flex-wrap align-items-center">
                <div
                  className="btn bg-white text-success mx-1"
                  onClick={() => navigate("/about")}
                >
                  <b>ABOUT</b>
                </div>
                <div className="btn bg-white text-success mx-1">
                  <Link className="text-decoration-none" to="/cartelement">
                    <b>BOOKMARKS</b>
                  </Link>
                </div>
                <div
                  className="btn bg-white text-danger mx-1"
                  onClick={handleLogout}
                >
                  <b>LOGOUT</b>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
