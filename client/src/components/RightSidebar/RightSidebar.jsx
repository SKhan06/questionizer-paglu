// import React from 'react'
// import "./RightSidebar.css"
// import Widget from './Widget'
// import WidgetTags from './WidgetTags'

// function RightSidebar() {
//   return (
//     <aside className='right-sidebar'>
//       <Widget/>
//       <WidgetTags/>

//     </aside>
//   )
// }

// export default RightSidebar

import React from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

function RightSidebar() {
  return (
    <aside className="fixed right-1 w-full lg:w-80 h-screen overflow-y-auto flex flex-col gap-6 bg-white mt-[15px]">
      <Widget />
      <WidgetTags />
    </aside>
  );
}

export default RightSidebar;
