import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white bg-[#030014]">
      {/* 🔵 Layered Glow Effects */}
      <div className="absolute inset-0 z-0">
        {/* top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.45)_0%,transparent_70%)] blur-[180px] opacity-70"></div>

        {/* center subtle blue light */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35)_0%,transparent_80%)] blur-[160px] opacity-50"></div>

        {/* bottom-right glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25)_0%,transparent_80%)] blur-[200px] opacity-60"></div>
      </div>

      {/* Main content above glows */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
