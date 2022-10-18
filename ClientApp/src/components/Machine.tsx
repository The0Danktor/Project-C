import React from 'react'

type MachineProps = {
    machineName: string,
    onclick?: () => any
}

export function Machine({ machineName, onclick }: MachineProps) {
    return (
        <li key={machineName}>
            <button
                onClick={onclick}
                className="bg-blue-400 dark:bg-gray-800 text-black dark:text-gray-400 dark:hover:text-white hover:bg-blue-500 dark:hover:bg-gray-700 py-4 px-60 rounded-xl">
                {machineName}
            </button>
        </li>
    )
}