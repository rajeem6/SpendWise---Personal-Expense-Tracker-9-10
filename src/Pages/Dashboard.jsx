import React, { useContext, useEffect } from "react";
import DashboardNav from "../components/dashboardNav";
import DashboardHeader from "../components/dashboardHeader";
import TheeDashboard from "../components/TheeDashboard";
import { AppContext } from "../Context/AppContext";
import DashboardFooter from "../components/dashboardFooter";

const Dashboard = () => {
  const { user } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DashboardNav user={user} />
      <DashboardHeader />
      <TheeDashboard user ={user} />
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
