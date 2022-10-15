import React from 'react'

export function Header() {
  return (
    <div className="flex flex-col h-24 w-screen bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
        <div className="flex flex-row h-24 w-screen text-2xl items- font-medium dark:text-gray-400 text-black transition duration-300">
            Logged in as: Admin
        </div>
    </div>
  )
}
