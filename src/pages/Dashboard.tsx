import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isDashboardVisible, setIsDashboardVisible] = useState(true);

  const handleNavigate = (path : any) => {
    setIsDashboardVisible(false);
    setTimeout(() => {
      navigate(path); // Navigate to the child route after animation
    }, 300); // Match the transition duration
  };

  const handleBack = () => {
    setIsDashboardVisible(false); // Start the transition
    setTimeout(() => {
      navigate("/"); // Navigate back to the dashboard
      setIsDashboardVisible(true); // Reset the state after navigation
    }, 300); // Match the transition duration
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Dashboard Section */}
      <div
        className={`absolute inset-0 bg-orange-100 h-screen w-full p-4 flex flex-col transition-transform duration-300 ${
          isDashboardVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold">
          <span className="text-4xl text-lime-600">Hey Everyone! </span>I am
          working upon this currently
        </h1>
        <p className="text-zinc-400">
          Below you can check upon all what I am working upon. Don't be
          disappointed, it's under development, soon will get u good material
        </p>
        <div className="content flex flex-col mt-8 gap-8">
          <div className="w-full flex justify-between p-4 px-6 items-center h-12 bg-lime-200 rounded">
            <h1
              className="text-lg font-bold opacity-60 text-lime-800"
              style={{ wordSpacing: "3px", letterSpacing: "1.5px" }}
            >
              To Do App
            </h1>
            <Button onClick={() => handleNavigate("/todo")}>Go To</Button>
          </div>
          <div className="w-full flex justify-between p-4 px-6 items-center h-12 bg-lime-200 rounded">
            <h1
              className="text-lg font-bold opacity-60 text-lime-800"
              style={{ wordSpacing: "3px", letterSpacing: "1.5px" }}
            >
              Move To Table
            </h1>
            <Button onClick={() => handleNavigate("/table")}>Go To</Button>
          </div>
        </div>
      </div>

      {/* Child Component Section */}
      <div
        className={`absolute inset-0 h-screen w-full p-4 flex flex-col transition-transform duration-300 ${
          isDashboardVisible ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {location.pathname !== "/" && (
            <Button
            onClick={handleBack}
            className="mt-4 bg-lime-500 text-white self-start"
            >
            Back
          </Button>
        )}
        <Outlet />
      </div>
    </div>
  );
}
