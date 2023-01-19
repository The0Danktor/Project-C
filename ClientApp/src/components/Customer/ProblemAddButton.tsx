import React from "react"

interface ProblemAddButtonProps {
    onclick: () => any
}

export function ProblemAddButton({onclick}: ProblemAddButtonProps) {
    return (
        <button type="button"
            className="ml-4"
            onClick={onclick}>
                    Add Problem
        </button>
    )
}