import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import bars from "../../assets/bars.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search-icon.svg";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/CurrentUser.js";
import { jwtDecode } from "jwt-decode";
import Login from "./Login.jsx";
import DrawerMenu from "./DrawerMenu.jsx";

function Navbar({ handleslidein }) {
  var User = useSelector((state) => state.currentUserreducer);
  const [query, setQuery] = useState("");
  const onSearch = useState(null)[0];
  // console.log(User)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedtoken = jwtDecode(token);
      if (decodedtoken.exp * 1000 < new Date().getTime()) {
        handlelogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (onSearch) {
      onSearch(query); // pass query up to parent
    }
    console.log("Searching for:", query); // fallback if no parent handler
  };
  return (
    <nav className="main-nav">
      <div className="navbar">
        {/* <button className="slide-in-icon" onClick={() => handleslidein()}> */}
        {/* <img src={bars} alt="bars" width="15" />
         */}
        <DrawerMenu />
        {/* </button> */}
        <div className="navbar-1">
          <Link to="/" className="nav-items nav-btn res-nav">
            Home
          </Link>
          <Link to="/questions" className="nav-items nav-btn res-nav">
            Question
          </Link>
          <Link to="/teams" className="nav-items nav-btn res-nav">
            Teams
          </Link>
          <Link to="/tags" className="nav-items nav-btn res-nav">
            Tags
          </Link>
          <Link to="/users" className="nav-items nav-btn res-nav">
            Users
          </Link>
          <Link to="/about" className="nav-items nav-btn res-nav">
            About
          </Link>
          <Link to="/contact-us" className="nav-items nav-btn res-nav">
            Contact Us
          </Link>
        </div>
        <div>
          {/* <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form> */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-72 bg-white shadow-sm"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
            />
            <button type="submit">
              <img
                src={search}
                alt="search"
                width="18"
                className="ml-2 text-gray-500 cursor-pointer"
              />
            </button>
          </form>
        </div>
        {/* <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="15px"
                py="10px"
                borderRadius="50%"
                color="white"
                width="40px"
                height="40px"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button
                className="nav-tem nav-links"
                onClick={handlelogout}
                style={{ marginLeft: "10px" }}
              >
                Log out
              </button>
            </>
          )}
        </div> */}
        <div>
          <Login User={User} handleLogout={handlelogout} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
