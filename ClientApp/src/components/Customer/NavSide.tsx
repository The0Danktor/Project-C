import React from 'react'

export  function NavSide() {
    const root = document.getElementsByTagName("html")[0];
    const toggleDarkMode = () => {
      root.setAttribute("class", "dark");
      localStorage.theme = "dark";
    };
    const toggleLightMode = () => {
      root.removeAttribute("class");
      localStorage.theme = "light";
    };
  return (
    <div className="absolute left-0 h-screen w-80 flex flex-col justify-center bg-white dark:bg-gray-900 border-r-2 border-gray-800">
        
    </div>
  )
}
