import React from "react";

import Sidebar from "components/Sidebar";
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div>Dashboard</div>
    </div>
  );
}
