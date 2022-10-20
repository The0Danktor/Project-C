import React from "react"

type MachineProps = {
    machineName: string,
    tekenNumber: string,
    onclick: () => void
}

export function Machine({machineName, tekenNumber, onclick}: MachineProps) {
    return (
        <li key={machineName}>
            <button
                onClick={onclick}
                className="bg-blue-300 dark:bg-gray-800 text-black dark:text-gray-400 dark:hover:text-white hover:bg-blue-400 dark:hover:bg-gray-700 py-5 px-96 rounded-xl border-2 border-blue-400 dark:border-gray-700">
                Machinename: {machineName} 
                Tekennumber: {tekenNumber}
            </button>
        </li>
    )
}