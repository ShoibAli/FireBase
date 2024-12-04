import React from "react";
import Button from "./Button";

const TopRightBar = ({ name, email, text, logoutfn }) => {
  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
      <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
        {name ? name[0].toUpperCase() : "?"}
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-800">{name || "Guest"}</p>
        <p className="text-sm text-gray-500">{email || "No Email Provided"}</p>
        <p className="text-xs text-gray-400 mt-1">{text || "Welcome!"}</p>
        <Button onClick={logoutfn} text={"SignOut"}></Button>
      </div>
    </div>
  );
};

export default TopRightBar;
