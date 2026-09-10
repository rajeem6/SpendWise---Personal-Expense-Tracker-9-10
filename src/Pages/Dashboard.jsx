import React, { useContext } from "react";
import DashboardNav from "../components/dashboardNav";
import DashboardHeader from "../components/dashboardHeader";
import TheeDashboard from "../components/TheeDashboard";
import { AppContext } from "../Context/AppContext";
import DashboardFooter from "../components/dashboardFooter";

const Dashboard = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <DashboardNav user={user} />
      <DashboardHeader />
      <TheeDashboard />
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
