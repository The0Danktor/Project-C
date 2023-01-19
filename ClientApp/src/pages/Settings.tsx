import { Switch } from "@headlessui/react";
import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Settings() {
  const [sendEmail, setSendEmail] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 flex">
      <NavSide />
      <div className="container">
        <h1 className="text-2xl">Settings</h1>
        <form className="grid-form">
          <label>Receive e-mails:</label>
          <Switch type="reset"
            checked={sendEmail}
            onChange={setSendEmail}
            className={`${sendEmail ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${sendEmail ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>


        </form>
      </div>
    </div>
  );
}
