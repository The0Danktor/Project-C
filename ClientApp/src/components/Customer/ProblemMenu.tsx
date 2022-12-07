import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { ProblemOption } from "./ProblemOption";

//https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js
interface Prop {
  Id?: string;
}
//`http://localhost:7162/api/${Id}/Solution`
export function ProblemMenu({ Id }: Prop) {
  const [loadingData, setLoadingData] = useState<boolean>();
  const [data, setData] = useState<JSON>();
  const [query, setQuery] = useState<string>();

  
  const fetchData = async () => {
    const response = await fetch(`http://localhost:7162/api/${query}/Solution`);
    setData(await response.json());
  };
  
  useEffect(() => {
    setQuery(Id);
    fetchData();
  }, [query]);

  return (
    <div className="w-full p-10 overflow-y-scroll">
      <h1 className="text-black dark:text-gray-400 text-xl">
        Select the option that suits your problem the most
      </h1>
      {/*//TODO vergrootglas icon toevoegen */}
      <input
        type="text"
        placeholder="Search"
        className="w-96 my-6 border-2 rounded-md focus:outline-none dark:bg-gray-900 dark:border-gray-800 px-3 py-2 dark:text-gray-400 dark:placeholder:text-gray-500 transition duration-300"
      />
      <div className="border-x-2 border-t-2 dark:border-gray-800  w-full rounded-md transition duration-300">
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
        <ProblemOption
          title="Product verkeerd op machine"
          machineType="Satelliet shuttle"
          solutions={[
            "Fotocellen controleren",
            "Eventueel product handmatig op juiste positie plaatsen",
          ]}
        />
      </div>
    </div>
  );
}
