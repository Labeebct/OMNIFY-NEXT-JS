"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../public/assets/Logo.png";
import adminProfile from "../../public/assets/admin-profile.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import SidebarIconLi from "./SidebarIconLi";
import WidgetsIcon from "@mui/icons-material/Widgets";
import InfoIcon from "@mui/icons-material/Info";
import LaunchIcon from "@mui/icons-material/Launch";

// Li icons
import InboxIcon from "@mui/icons-material/Inbox";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const SideBar = () => {
  const [hideNav, setHideNav] = useState(true);

  const sidNavLi = [
    {
      id: 1,
      icon: InboxIcon,
      navHead: "Orders",
    },
    { id: 2, icon: SubscriptionsIcon, navHead: "Subscriptions" },
    { id: 3, icon: CalendarMonthIcon, navHead: "Calender" },
    { id: 4, icon: HourglassEmptyIcon, navHead: "Waitlist" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1300) {
        setHideNav(false);
      } else {
        setHideNav(true);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className={`flex flex-col flex-shrink-0 justify-between duration-500 ease-in-out h-full ${
        hideNav ? "w-[3.3rem]" : "w-[260px]"
      } overflow-hidden bg-slate-200`}
    >
      <div>
        {/* FRONT-DESK */}
        <div className="flex w-full justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Image
              onClick={() => setHideNav(false)}
              src={logo}
              className="h-7 w-8 cursor-pointer"
              alt="Logo"
            />
            <h2 className="font-bold text-[1.1rem] overflow-hidden whitespace-nowrap">
              Front-Desk
            </h2>
          </div>
          {/* FRONT DESK RIGHT ICON */}
          <div
            onClick={() => setHideNav(true)}
            className="flex cursor-pointer w-4 h-4 border-2 border-[#2222229e] rounded-sm"
          >
            <div className="flex-1 bg-transparent"></div>
            <div className="flex-1 bg-[#2222229e]"></div>
          </div>
        </div>
        {/* LOCATION NAME */}
        <div className="flex w-full font-medium justify-between items-center px-5 pt-3 pb-0">
          {!hideNav && (
            <h3 className="text-[.9rem] whitespace-nowrap">Location Name</h3>
          )}
          <div className={`flex ${hideNav ? "ml-1" : "ml-0"} flex-col`}>
            <EastIcon sx={{ fontSize: ".9rem" }} />
            <WestIcon
              sx={{ fontSize: ".9rem" }}
              className="-translate-x-1 -translate-y-1"
            />
          </div>
        </div>
        {/* TIME DATE */}
        <div className="px-4 mt-4">
          {!hideNav ? (
            <div className="flex flex-col overflow-hidden bg-slate-300 rounded-sm mx-auto p-2 gap-1 ">
              <div className="flex justify-around items-center">
                <h3 className="font-bold text-[1.05rem]">08:30 AM</h3>
                <h5 className="font-medium text-[.85rem]">Tue 20 Jan</h5>
              </div>
              <div className="flex justify-between px-[.8rem]">
                <div className="flex items-center gap-1">
                  <LanguageIcon sx={{ fontSize: "1.2rem" }} />
                  <h4 className="font-medium text-[.85rem]">UTC: +5 hours</h4>
                </div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          ) : (
            <div className="ml-1">
              <LanguageIcon sx={{ fontSize: "1.2rem" }} />
            </div>
          )}
        </div>

        {/* SIDEBAR ICONS TEXT LI */}
        <div>
          <SidebarIconLi sidNavLi={sidNavLi} />
        </div>
      </div>

      {/* DASHBOARD */}
      <div className="p-2">
        <div className="flex mb-4 mx-auto p-4 hover:bg-slate-300 rounded-sm cursor-pointer justify-between">
          <div className="flex gap-4 items-center">
            <WidgetsIcon sx={{ fontSize: "1.2rem" }} />
            <h3 className="text-[.95rem]">Dashboard</h3>
          </div>
          <LaunchIcon sx={{ fontSize: "1.2rem" }} />
        </div>
        {/* ADMIN-HELP CENTER */}
        <div className="flex my-2 cursor-pointer justify-between">
          <div className="flex gap-1 items-center">
            <Image
              src={adminProfile}
              className="h-10 w-[3rem]"
              alt="Admin Profile"
            />
            <div>
              <h3 className="text-[.87rem] font-bold">Admin name</h3>
              <h4 className="text-[.7rem] font-light">adminname@gmail.com</h4>
            </div>
          </div>
          <KeyboardArrowDownIcon
            className="my-auto"
            sx={{ fontSize: "1.2rem" }}
          />
        </div>
        <div className="flex my-2 mb-4 cursor-pointer justify-between">
          <div className="flex gap-1 items-center">
            <div className="px-3">
              <InfoIcon />
            </div>
            <div>
              <h3 className="text-[.87rem] font-bold">Help Center</h3>
              <h4 className="text-[.7rem] font-light">@2024 Omnify.inc</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
