/* eslint-disable no-unused-vars */
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardComp from "../components/DashboardComp";
import Siderbar from "../components/Sidebar";


const Dashboard = () => {
  return (
    <div className="w-full bg-white h-screen">
    <Header />
    <div className="flex w-full">
      <div className="w-[20%]">
        <Siderbar />
      </div>
      <div className="w-[80%]">
        <DashboardComp />
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Dashboard