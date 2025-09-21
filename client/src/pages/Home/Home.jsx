// import React from "react";
// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import RightSidebar from "../../components/RightSidebar/RightSidebar";
// import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
// import "../../App.css";
// function Home({ slidein, handleslidein }) {
//   return (
//     <div className="home-container-1">
//       {/* <LeftSidebar slidein={slidein} handleslidein={handleslidein} /> */}
//       <div className="home-container-2">
//         <HomeMainbar />
//         <RightSidebar />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

function Home({ slidein, handleslidein }) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-1 justify-between p-6 gap-6">
        <div className="flex-1 bg-white p-6">
          <HomeMainbar />
        </div>
        <div className="hidden lg:block w-80 bg-white ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
