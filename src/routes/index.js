import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/index.jsx";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        {/* <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} /> */}
      </Route>
      {/* <Route path="about" element={<AboutPage />} /> */}
    </Routes>
  );
};

export default RoutesComp;
