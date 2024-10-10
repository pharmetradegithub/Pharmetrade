// import React from "react";
// import Sidebar from "../Layouts/AdminSideBar";
// import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import AdminNav from "./AdminNav";
// import AdminSideBar from "../Layouts/AdminSideBar";

// function AdminPanel() {
//   return (
//     <div className="flex flex-col h-screen overflow-hidden  w-screen bg-gray-100 ">
//       <AdminNav />
//       <div className="flex w-screen h-full overflow-hidden   ">
//         <AdminSideBar/>
//         <div className="w-full h-full  flex justify-end ">
//           <div
//             className={`medium:w-[calc(100%-256px)] h-full overflow-scroll w-[calc(100%-4rem)] `}
//           >
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPanel;



import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";
import AdminSideBar from "../Layouts/AdminSideBar";



function AdminPanel({ cartItems }) {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-gray-100">
      <div className="w-64 h-full bg-blue-900">
        <AdminSideBar />
      </div>
      <div
        className={`medium:w-[calc(100%-256px)] flex flex-col h-full w-[calc(100%-4rem)] `}
      >
        {/* <LayoutNav cartItems={cartItems} /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPanel;
