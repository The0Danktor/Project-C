import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNav } from "../components/Shared/AdminSidebar";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useEffect } from "react";

//create a page with different settings for the admin
export const AdminSettings = () => {
    //create a list of settings
    const settings = [
        {
            id: 1,
            name: "Change Password",
            description: "Change your password",
            link: "/admin/settings/change-password"
        },
        {
            id: 2,
            name: "Change Email",
            description: "Change your email",
            link: "/admin/settings/change-email"
        },
        {
            id: 3,
            name: "Change Phone Number",
            description: "Change your phone number",
            link: "/admin/settings/change-phone"
        },
        {
            id: 4,
            name: "Change Workgroup",
            description: "Change your workgroup",
            link: "/admin/settings/change-workgroup"
        },
        {
            id: 5,
            name: "Change Name",
            description: "Change your name",
            link: "/admin/settings/change-name"
        },
    ];
    //create a function to update settings with new values
    const [settingsList, setSettingsList] = useState(settings);
    const [newSettings, setNewSettings] = useState({
        id: 0,
        name: "",
        description: "",
        link: ""
    });
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(0);


    

    return (
        <>
        <div className="flex bg-white dark:bg-gray-900 w-full transition duration-300">
        <AdminNav />
        <div className="w-full">
            <Header />
            { /* Display settings in a visually pleasing way */}
            <div className="flex justify-center">
                <div className="w-5/6">
                    <div className="flex justify-center">
                        <div className="w-full">
                            <div className="flex">
                                <div className="w-1/6">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">ID</p>
                                </div>
                                <div className="w-2/6">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">Name</p>
                                </div>
                                <div className="w-3/6">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">Description</p>
                                </div>
                            </div>
                            {settingsList.map((setting) => (
                                <div className="flex" key={setting.id}>
                                    <div className="w-1/6">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">{setting.id}</p>
                                    </div>
                                    <div className="w-2/6">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">{setting.name}</p>
                                    </div>
                                    <div className="w-3/6">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">{setting.description}</p>
                                    </div>
                                    <div className="w-1/6">
                                        <Link to={setting.link}>
                                        <button className="bg-blue-500 dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            

            
        </div>
        </div>
        </>

            
    );
};
