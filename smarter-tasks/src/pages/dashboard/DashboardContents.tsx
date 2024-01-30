
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardContent: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}")
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate("/signin")
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Name: {userData.name}</h1>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Email id: {userData.email}</h1>
      <a id="logout-link" href="#" onClick={handleLogout}>Logout</a>
    </div>
  );
};

export default DashboardContent;
