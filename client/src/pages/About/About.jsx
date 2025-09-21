import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import AboutMainbar from "../../components/AboutMainbar/AboutMainbar";
import "../../App.css";
function About({ slidein, handleslidein }) {
  return (
    <div className="flex min-h-screen ">
      <div className="flex-1 bg-white">
        <AboutMainbar />
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-80 bg-white ">
        <RightSidebar />
      </div>
      {/* </div> */}
    </div>
  );
}

export default About;
