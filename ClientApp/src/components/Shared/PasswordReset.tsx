import { Dialog } from "@headlessui/react";
import React from "react";

export function PasswordReset() {
  let [isOpen, setIsOpen] = React.useState(true);
  const [password, setPassword] = React.useState<string>("");
    let [isDone, setIsDone] = React.useState(false);

  const resetPassword = async () => {
    //Password regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (passwordRegex.test(password)) {
      try {
        const response = await (
          await fetch(`http://localhost:7162/api/Auth/ChangePassword`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ newPassword: password }),
          })
        ).json();
        if (response) {
          setIsDone(true);
          setIsOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
      
    } else {
      alert(
        "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number"
      );
    }
  };

  return (
    <>
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(true)}
      className="fixed z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog.Panel className="fixed inset-0 z-[60] overflow-y-auto w-96 h-64 border-2 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 mx-auto my-auto rounded-2xl p-7 transition duration-300">
        <div className="flex flex-col w-full h-full">
          <Dialog.Title className="text-lg font-bold mb-1">
            Change password
          </Dialog.Title>
          <Dialog.Description className="text-sm">
            Because you logged in with a temporary password, you must change
            your password before you can continue.
          </Dialog.Description>

          <input
            type="password"
            name="password"
            id="password"
            className="m-4"
            placeholder="New password"
            required={true}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            className="rounded-xl p-1 dark:hover:bg-gray-800 border-2 hover:bg-gray-200 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800"
            onClick={() => resetPassword()}
          >
            Change password
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
    <Dialog
    open={isDone}
    onClose={() => setIsDone(false)}
    className="fixed z-50"
  >
    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    <Dialog.Panel className="fixed inset-0 z-[60] overflow-y-auto w-96 h-36 border-2 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 mx-auto my-auto rounded-2xl p-7 transition duration-300">
        <Dialog.Title className="text-lg font-bold mb-1">
          Your password has successfully been changed
        </Dialog.Title>
        <Dialog.Description className="text-sm">
            Click outside the popup to continue
        </Dialog.Description>
    </Dialog.Panel>
  </Dialog>
  </>
    
  );
}
