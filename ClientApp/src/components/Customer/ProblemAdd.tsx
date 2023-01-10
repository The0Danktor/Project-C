import React from "react";
import { ProblemOption } from "./ProblemOption";

interface AddProblemProps {
    titleInput: string,
    machineTypeInput: string,
    solutionsInput: string[]
    list: any[]
}

export function ProblemAdd({titleInput, machineTypeInput, solutionsInput, list}: AddProblemProps) {
    list.push(<ProblemOption title={titleInput} machineType={machineTypeInput} solutions={solutionsInput} />)

    return (
        <ul>
            {list.map((item) => (
            <li>{item}</li>
            ))}
        </ul>
    )
}