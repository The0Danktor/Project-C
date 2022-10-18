import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserIcon, LockClosedIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

interface LoginFormControlsCollection extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

export function LoginPage() {
  const { t } = useTranslation();

  const [message, setMessage] = useState(null);
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [timeoutId, setTimeoutId] = useState(-1);


  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const els = e.currentTarget.elements as LoginFormControlsCollection;
    const username = els.username.value;
    const password = els.password.value;

    if (username === "admin" && password === "admin") {
      setMessage(t("login.success"));
    } else {
      setMessage(t("login.failure"));
      form.current?.classList.add("shake");
      clearTimeout(timeoutId);
      setTimeoutId(window.setTimeout(() => form.current?.classList.remove("shake"), 600));
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={login} ref={form} className="flex flex-col gap-4 w-80 p-8 border-2 border-gray-100 dark:border-gray-800 rounded-xl origin-bottom">
        <h1 className="mx-3 text-2xl text-center">{t("login.title")}</h1>
        <label className="flex">
          <UserIcon className="w-6 h-6 m-2" />
          <input type="text" name="username" placeholder={t("login.username")} required />
        </label>
        <label className="flex">
          <LockClosedIcon className="w-6 h-6 m-2" />
          <input type="password" name="password" placeholder={t("login.password")} required />
        </label>
        <input type="submit" hidden />
        <button type="button" className="w-fit mx-auto" onClick={e => form.current?.requestSubmit()}>
          <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-2 inline-block" />
          {t("login.submit")}
        </button>
        {message && <p className="text-red-400 transition duration-100 height-y-in overflow-hidden">{message}</p>}
      </form>
    </div>
  );
}
