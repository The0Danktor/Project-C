import React from "react"

type MachineProps = {
    machineName: string,
    tekenNumber: string,
    type: string,
    onclick: () => void
}

export function Machine({machineName, tekenNumber, type, onclick}: MachineProps) {
    return (
        <li key={machineName} className="w-full">
            <button
                onClick={onclick}
                className="flex gap-1 px-8 py-5 items-center justify-between w-full bg-blue-300 dark:bg-gray-800 text-black dark:text-gray-400 dark:hover:text-white hover:bg-blue-400 dark:hover:bg-gray-700 rounded-xl border-2 border-blue-400 dark:border-gray-700">
                    <div className="px-5 py-2 rounded-xl border-2 border-blue-400 dark:border-gray-700">{machineName}</div>
                    <div className="flex gap-2">
                        <div className="px-5 py-1 rounded-xl border-2 border-blue-400 dark:border-gray-700">Tekennumber: {tekenNumber}</div>
                        <div className="px-5 py-1 rounded-xl border-2 border-blue-400 dark:border-gray-700">Type: {type}</div>
                    </div>
            </button>
        </li>
    )
}