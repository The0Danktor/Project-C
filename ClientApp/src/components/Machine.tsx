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
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-52 rounded-full">
                {machineName}
            </button>
        </li>
    )
}