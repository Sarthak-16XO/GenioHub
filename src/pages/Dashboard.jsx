/* eslint-disable no-unused-vars */
import React from 'react';
import Header from "../components/Header2";
import Footer from "../components/Footer";
import DashboardComp from "../components/DashboardComp";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {
  return (
    <div className="w-full bg-white h-screen">
    <Header />
    <div className="flex w-full overflow-hidden bg-white">
      <div className="w-[20%] hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%]">
        <DashboardComp />
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Dashboard