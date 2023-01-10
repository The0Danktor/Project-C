import React from "react";
import { ProblemOption } from "./ProblemOption";

export function ProblemList() {
    const list = [
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />,
        <ProblemOption title="Product verkeerd op machine" machineType="Satelliet shuttle" solutions={["Fotocellen controleren","Eventueel product handmatig op juiste positie plaatsen"]} />
    ]
    
    return (
        <ul>
            {list.map((item) => (
            <li>{item}</li>
            ))}
        </ul>
    )
}