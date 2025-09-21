import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
// import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import Navbar from "./components/Navbar/Navbar.jsx";
import Tags from "./components/Tags/Tags.jsx";
import ContactUs from "./pages/Contact-Us/ContactUs.jsx";
import Teams from "./pages/Teams/Team.jsx";
// import Forget from "./pages/Forget/forget-password.jsx"

const AllRoutes = ({ slidein, handleslidein }) => {
  return (
    <div className="pt-14">
      <Navbar />
      {/* <div>Hello</div> */}
      <Routes>
        <Route
          path="/"
          element={<Home slidein={slidein} handleslidein={handleslidein} />}
        />
        <Route
          path="/about"
          element={<About slidein={slidein} handleslidein={handleslidein} />}
        />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/forget-password" element={<Forget />} /> */}
        <Route
          path="/questions"
          element={
            <Questions slidein={slidein} handleslidein={handleslidein} />
          }
        />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route
          path="/question/:id"
          element={
            <DisplayQuestion slidein={slidein} handleslidein={handleslidein} />
          }
        />
        <Route
          path="/tags"
          element={<Tags slidein={slidein} handleslidein={handleslidein} />}
        />
        <Route
          path="/users"
          element={<Users slidein={slidein} handleslidein={handleslidein} />}
        />
        <Route
          path="/contact-us"
          element={
            <ContactUs slidein={slidein} handleslidein={handleslidein} />
          }
        />
         <Route
          path="/teams"
          element={
            <Teams slidein={slidein} handleslidein={handleslidein} />
          }
        />
        <Route
          path="/users/:id"
          element={
            <UserProfile slidein={slidein} handleslidein={handleslidein} />
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
