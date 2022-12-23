import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  UserIcon,
  LockClosedIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginFormControlsCollection extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

export function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [timeoutId, setTimeoutId] = useState(-1);

  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [Response, setResponse] = useState<any>();

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const els = e.currentTarget.elements as LoginFormControlsCollection;
    const username = els.username.value;
    const password = els.password.value;
    
    try {
      await setResponse(
        await axios.post("http://localhost:7162/api/Auth/login", {
          Email,
          Password,
        })
      );
    } catch (e) {
      console.log(e);
      setMessage(t("login.failure"));
      form.current?.classList.add("shake");
      clearTimeout(timeoutId);
      setTimeoutId(
        window.setTimeout(() => form.current?.classList.remove("shake"), 600)
      );
    }

    console.log(Response.data);

    if (Response.status === 200) {
      setMessage(t("login.success"));
      localStorage.setItem("token", Response.data);
      navigate("/");
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={login}
        ref={form}
        className="flex flex-col gap-4 w-80 p-8 border-2 border-gray-100 dark:border-gray-800 rounded-xl origin-bottom"
      >
        <h1 className="mx-3 text-2xl text-center">{t("login.title")}</h1>
        <label className="flex">
          <UserIcon className="w-6 h-6 m-2" />
          <input
            type="text"
            name="username"
            placeholder={t("login.username")}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className="flex">
          <LockClosedIcon className="w-6 h-6 m-2" />
          <input
            type="password"
            name="password"
            placeholder={t("login.password")}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <input type="submit" hidden />
        <button
          type="button"
          className="w-fit mx-auto"
          onClick={(e) => form.current?.requestSubmit()}
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-2 inline-block" />
          {t("login.submit")}
        </button>
        {message && (
          <p className="text-red-400 transition duration-100 height-y-in overflow-hidden">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
