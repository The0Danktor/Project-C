import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "./NavSide";
import { Header } from "./Header";
import { ButtonAdmin } from "./Button";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
    },
  ],
};

export function Layout() {
  const state = {
    items: [
      {
        id: 0,
        name: "foo",
        date: "2020-01-01",
      },
      {
        id: 1,
        name: "bar",
        date: "2020-01-02",
      },
      {
        id: 2,
        name: "baz",
        date: "2020-01-03",
      },
      {
        id: 3,
        name: "qux",
        date: "2020-01-04",
      },
      {
        id: 4,
        name: "quux",
        date: "2020-01-05",
      },
    ],
  };
  function renderMenuItems() {
    let items = state.items.map((item: any, index: any) => {
      return (
        <div className="flex flex-col w-96" key={item.id}>
          <div className="flex flex-col mx-10  items-center border-4 border-gray-100 hover:bg-slate-100 dark:hover:bg-gray-800 dark:border-gray-800 shadow-lg rounded-full mt-5 dark:shadow-gray-800 justify-center font-semibold transition duration-300">
            {item.id} | {item.name} | {item.date}
          </div>
        </div>
      );
    });
    return items;
  }

  function recentActvity(title: string) {
    return (
      <div className="flex flex-col items-center mt-4 w-[95%] xl:w-[48%] h-fit p-2 pb-4 border border-gray-300 dark:border-gray-700 rounded-3xl">
        <div className="flex flex-col justify-center items-center w-60 text-2xl mt-2 h-10 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-full transition duration-300">
          <p>{title}</p>
        </div>
        <div className="flex flex-col justify-center font-semibold text-2xl ">
          {renderMenuItems()}
        </div>
      </div>
    );
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      {/* overflow-hidden */}
      <div className="flex flex-col grow w-full md:overflow-visible">
        {/* <Header /> */}
        <div className="container justify-center md:justify-start">
          <div className="flex flex-col md:flex-row flex-wrap w-full font-semibold text-black dark:text-gray-400 mr-4 transition duration-300">
            {/* button links */}
            <ButtonAdmin linkTo="accounts" title="Our Accounts" bar="bar" />
            <ButtonAdmin linkTo="machines" title="Our Machines" bar="bar" />
            <ButtonAdmin linkTo="problems" title="History" bar="bar" />
            <ButtonAdmin linkTo="dev" title="placeholder" bar="bar" />
            {/* <ButtonAdmin linkTo="dev" title="placeholder" bar="bar"/> */}
          </div>

          {/* recent activity */}
          <div className="flex justify-center md:justify-start gap-2 flex-wrap font-semibold w-full md:m-2 md:ml-2 md:mr-7 text-black dark:text-gray-400 transition duration-300">
            {recentActvity("Recent activity")}
            {recentActvity("Recent errors")}
            {recentActvity("Wee nie")}
            {recentActvity("Wee nie")}
          </div>
          {/* <div className="flex flex-row w-full mt-14 mx-10 dark:text-gray-400 items-start font-semibold text-2xl transition duration-300">
          
          <div className="mt-2 w-1/2 h-3/4 items-start border-gray-100 dark:border-gray-800 border-2 rounded-2xl shadow-lg dark:shadow-gray-800"><Chart type="bar" data={data}/></div>
          
          <div className="mt-2 w-1/2 h-3/4 items-end border-gray-100 dark:border-gray-800 border-2 rounded-2xl shadow-lg dark:shadow-gray-800"><Chart type="bar" data={data}/></div>
        </div> */}
        </div>
      </div>
    </div>
  );
}