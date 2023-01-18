import React from "react"

interface ProblemAddButtonProps {
    onclick: () => any
}

export function ProblemAddButton({onclick}: ProblemAddButtonProps) {
    return (
        <button
            onClick={onclick}
            className="flex gap-1 px-8 py-5 items-center justify-between bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-700">
                <div>
                    Add Problem
                </div>
        </button>
    )
}