import React from "react";
import DashboardContent from "./DashboardContents";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <h1 className="text-3xl m-5 text-center font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <DashboardContent></DashboardContent>
      </div>
    </div>
  );
};

export default Dashboard;
