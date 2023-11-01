// @ts-ignore
import Avatar from "../assets/images/Avatar.png";
import React from "react";

export function Sidebar() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center border-right-1 border-gray-lighter py-1">
      <div className="d-flex flex-column align-items-center">
        <div className="p-1 radius-5 bg-primary text-white cursor-pointer">
          <i className="fas fa-list-alt text-18"></i>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="py-1 cursor-pointer">
          <i className="fas fa-cog text-gray-primary text-24"></i>
        </div>
        <div className="py-1 cursor-pointer">
          <img src={Avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
