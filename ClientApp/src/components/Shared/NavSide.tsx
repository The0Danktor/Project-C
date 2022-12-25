import React, { useEffect, useState } from "react";
import { DarkmodeSwitch } from "./DarkmodeSwitch";
import { NavSideButton } from "./NavSideButton";
import { NavSideButtonLogo } from "./NavSideButton";
import logo from "../../assets/logo.png";
import {
  BookOpenIcon,
  HomeIcon,
  PencilSquareIcon,
  UsersIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  SwatchIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { User } from "../../Types/types";
import { useNavigate } from "react-router-dom";

export function NavSide() {
  const [isOpen, setActive] = useState(false);
  const navigate = useNavigate();
  const [loadingData, setLoadingData] = useState<boolean>();
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const response = await (
        await fetch(`http://localhost:7162/api/Auth`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      ).json();
      setUser(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function open() {
    setActive(!isOpen);
    // if (isOpen) {
    //   // will make everything unscrollable except the popup itself
    //   document.body.style.position = "inherit";
    // } else {
    //   document.body.style.position = "fixed";
    // }
  }
  return (
    <div>
      {/* menu button */}
      <button
        className={
          (isOpen ? "top-8" : "top-3") +
          " sm:hidden bg-white dark:bg-gray-900 fixed z-30 right-3 transition-[top] border-2 p-2 rounded-3xl dark:border-gray-400 border-gray-500"
        }
        onClick={() => open()}
      >
        <Bars3Icon className="w-4 h-4 text-gray-500" />
      </button>

      {/* menu upper part */}
      <div
        className={
          (isOpen ? "" : "-translate-x-full sm:translate-x-[unset] z-[9999]") +
          " h-screen min-h-[50vh] overflow-auto fixed sm:sticky top-0 w-screen sm:w-80 sm:flex flex-col bg-white dark:bg-gray-900 border-r-2 border-gray-100 dark:border-gray-800 transition duration-300"
        }
      >
        <div className="flex justify-between items-center w-full py-3 px-3 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
          <NavSideButtonLogo img={logo} page="../" />
          <div className="flex flex-row h-9">
            <DarkmodeSwitch />
          </div>
        </div>

        {/* menu links */}
        <div className="flex flex-col sm:h-full justify-between height">
          <div className="flex flex-col items-center my-4">
            <NavSideButton
              title="Home"
              svg={<HomeIcon className="w-6 h-6 m-2" />}
              page="../"
            />
            <NavSideButton
              title="Tickets"
              svg={<PencilSquareIcon className="w-6 h-6 m-2" />}
              page="../ticket"
            />
            <NavSideButton
              title="Knowledge Base"
              svg={<BookOpenIcon className="w-6 h-6 m-2" />}
              page="../knowledge"
            />
            <NavSideButton
              title="Admin"
              svg={<UsersIcon className="w-6 h-6 m-2" />}
              page="../admin"
            />
            <NavSideButton
              title="Testing Ground"
              svg={<SwatchIcon className="w-6 h-6 m-2" />}
              page="../test"
            />
          </div>
          <div className="flex flex-col items-center my-4">
            <NavSideButton
              title="Settings"
              svg={<Cog8ToothIcon className="w-6 h-6 m-2" />}
              page="../settings"
            />
            <NavSideButton
              title="Account"
              svg={<UserIcon className="w-6 h-6 m-2" />}
              page="../account"
            />
            <NavSideButton
              title="Logout"
              svg={<ArrowRightOnRectangleIcon className="w-6 h-6 m-2" />}
              page="../login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
