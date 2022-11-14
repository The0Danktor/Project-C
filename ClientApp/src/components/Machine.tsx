import React from "react"

type MachineProps = {
    machineName: string,
    tekenNumber: string,
    type: string,
    onclick: () => void
}

export function Machine({machineName, tekenNumber, type, onclick}: MachineProps) {
    return (
        <li key={machineName}>
            <button
                onClick={onclick}
                className="flex flex-col gap-1 items-center w-full bg-blue-300 dark:bg-gray-800 text-black dark:text-gray-400 dark:hover:text-white hover:bg-blue-400 dark:hover:bg-gray-700 py-5 px-96 rounded-xl border-2 border-blue-400 dark:border-gray-700">
                    <div className="px-5 py-1 rounded-xl border-2 border-blue-400 dark:border-gray-700">Name: {machineName}</div>
                    <div className="px-5 py-1 rounded-xl border-2 border-blue-400 dark:border-gray-700">Tekennumber: {tekenNumber}</div>
                    <div className="px-5 py-1 rounded-xl border-2 border-blue-400 dark:border-gray-700">Type: {type}</div>
            </button>
        </li>
    )
}