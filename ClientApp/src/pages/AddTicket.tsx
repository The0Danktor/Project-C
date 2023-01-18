import { MouseEvent, useEffect, useRef, useState } from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import RichTextEditor from "../components/Shared/Editor"
import { Descendant } from "slate";
import { AddImage } from "./AddImage";

interface Machine {
  id: string;
  name: string;
  tekennummer: string;
}

interface Problem {
  id: string;
  machineId: string;
  description: string;
  solutions: string[];
}

type RefType = { get value(): Descendant[], set value(x) };

const initial: RefType = {
  value: [{ type: "paragraph", children: [{ text: "" }] }]
};

export function getUserId(): string | null {
  const token = localStorage.getItem("token");
  
  if (!token)
    return null;
  
  return JSON.parse(decodeURIComponent(window.atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"];
}

const toBase64 = (url: string) => new Promise((resolve, reject) => {
  fetch(url).then(res => res.blob()).then(blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
});

export function AddTicket() {
  const [loadedMachines, setLoadedMachines] = useState(false);
  const [loadedProblems, setLoadedProblems] = useState(false);

  const [isMachine, setIsMachine] = useState(true);
  const [machines, setMachines] = useState<Machine[]>([]); // TODO: Get machines from API
  const [machineQuery, setMachineQuery] = useState<string | undefined>(undefined);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  const [isExistingProblem, setIsExistingProblem] = useState<boolean>(true);
  const [problems, setProblems] = useState<Problem[]>([]); // TODO: Get problems from API
  const [problemQuery, setProblemQuery] = useState<string | undefined>(undefined);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  const filteredMachines = machines.filter(machine => machine.name.toLowerCase().includes(machineQuery?.toLowerCase() ?? ""));
  const filteredProblems = problems.filter(problem => problem.description.toLowerCase().includes(problemQuery?.toLowerCase() ?? ""));

  const [images, setImages] = useState<string[]>([]);

  const problemRef = useRef<RefType>(initial);
  const seeRef = useRef<RefType>(initial);
  const expectRef = useRef<RefType>(initial);
  const triedRef = useRef<RefType>(initial);

  const problemSource = isExistingProblem && problems.length > 0;

  useEffect(() => {
    const id = getUserId();

    if (!id)
      return;

    fetch("http://localhost:7162/api/Machine/Current/" + id, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        setMachines(data);
        setSelectedMachine(data[0]);
        setLoadedMachines(true);
      });
  }, []);

  useEffect(() => {
    setProblems([]);
    if (selectedMachine)
      setMachineQuery(selectedMachine.name);

    if (selectedMachine) {
      fetch("http://localhost:7162/api/Problem/Machine/" + selectedMachine.id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
        .then(response => response.json())
        .then(data => {
          setProblems(data);
          if (data.length > 0)
            setSelectedProblem(data[0]);
          else
            setSelectedProblem(null);
          setLoadedProblems(true);
        });
    }
  }, [machines, selectedMachine]);

  useEffect(() => {
    if (selectedProblem)
      for (const checkbox of (document.querySelectorAll(".checkboxes input[type=checkbox]") as NodeListOf<HTMLInputElement>))
        checkbox.checked = false;
  }, [selectedProblem]);

  // submit function
  async function submit() {
    const id = getUserId();

    if (!id)
      return;

    const imgs = [];
    for (const img of images)
      imgs.push(await toBase64(img));

    fetch("http://localhost:7162/api/Ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId: id,
        machineId: isMachine ? selectedMachine?.id : undefined,
        tekennummer: isMachine ? selectedMachine?.tekennummer : undefined,
        problemId: isExistingProblem ? selectedProblem?.id : undefined,
        problemDescription: isExistingProblem ? undefined : JSON.stringify(problemRef.current.value),
        images: imgs,
        note: JSON.stringify({
          see: seeRef.current.value,
          expect: expectRef.current.value,
          tried: triedRef.current.value
        })
      })
    });

    // sends email
    fetch("https://localhost:7162/api/Email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        // Customer: ,
        // User: ,
        // Ticket: <Ticket ticket={} ></Ticket>,
      }),
    });
  }

  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div className="container">
        <strong className="text-2xl">New Ticket</strong>
        {loadedMachines ?
          <ol className="list-decimal flex flex-col gap-8 mt-4">
            <li>
              <p className="my-2">Select the source of the problem</p>
              <div className="flex flex-col xl:flex-row gap-2 w-full items-stretch">
                <div onClick={() => setIsMachine(true)} className={`rounded-md p-4 flex-1 flex items-center gap-4 border-gray-200 dark:border-gray-800 border-2 cursor-pointer min-w-0 ${isMachine ? "!border-sky-500" : ""}`}>
                  <div className={`w-8 aspect-square ${isMachine ? "bg-sky-500" : "bg-gray-200 dark:bg-gray-700"} rounded-full flex justify-center items-center`}>
                    {isMachine && <CheckIcon className="w-6 text-gray-300" style={{ strokeWidth: 3 }} />}
                  </div>
                  <div className="flex flex-col w-full">
                    <strong>Machine</strong>
                    <Combobox value={selectedMachine} onChange={setSelectedMachine} disabled={!isMachine}>
                      <div className="relative">
                        <Combobox.Input onChange={e => setMachineQuery(e.target.value)} displayValue={(m: Machine) => m.name} className="!pr-6 w-full" />
                        <Combobox.Button className="absolute !px-0 !bg-transparent -ml-6" onClick={(_: MouseEvent<HTMLButtonElement>) => setMachineQuery("")}>
                          <ChevronUpDownIcon className="w-6" />
                        </Combobox.Button>
                        <Combobox.Options className="absolute w-full mt-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-md shadow-md z-10">
                          {filteredMachines.map(machine => (
                            <Combobox.Option key={machine.id} value={machine}>
                              {({ active }) => (
                                <div className={`${active ? "bg-gray-300 dark:bg-gray-700" : ""} p-2 rounded-md`}>
                                  {machine.name} ({machine.tekennummer})
                                </div>
                              )}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      </div>
                    </Combobox>
                  </div>
                </div>
                <div onClick={() => setIsMachine(false)} className={`rounded-md p-4 flex-1 flex items-center gap-4 border-gray-200 dark:border-gray-800 border-2 cursor-pointer min-w-0 ${!isMachine ? "!border-sky-500" : ""}`}>
                  <div className={`w-8 aspect-square ${!isMachine ? "bg-sky-500" : "bg-gray-200 dark:bg-gray-700"} rounded-full flex justify-center items-center`}>
                    {!isMachine && <CheckIcon className="w-6 text-gray-300" style={{ strokeWidth: 3 }} />}
                  </div>
                  <div>
                    <strong>Software</strong>
                    <p>Not one particular machine</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <p className="my-2">Describe the problem you're experiencing</p>
              <div className="flex flex-col xl:flex-row gap-2 w-full items-stretch">
                <div onClick={() => setIsExistingProblem(true)} className={`rounded-md p-4 flex-1 flex items-center gap-4 border-gray-200 dark:border-gray-800 border-2 cursor-pointer min-w-0 ${problemSource ? "!border-sky-500" : ""}`}>
                  <div className={`w-8 aspect-square ${problemSource ? "bg-sky-500" : "bg-gray-200 dark:bg-gray-700"} rounded-full flex justify-center items-center`}>
                    {problemSource && <CheckIcon className="w-6 text-gray-300" style={{ strokeWidth: 3 }} />}
                  </div>
                  <div className="flex flex-col w-full h-full">
                    <strong>Existing problem</strong>
                    {problems.length > 0 ?
                      <Combobox value={selectedProblem} onChange={setSelectedProblem} disabled={!isExistingProblem}>
                        <div className="relative">
                          <Combobox.Input onChange={e => setProblemQuery(e.target.value)} displayValue={(p: Problem) => p.description} className="!pr-6 w-full" />
                          <Combobox.Button className="absolute !px-0 !bg-transparent -ml-6" onClick={(_: MouseEvent<HTMLButtonElement>) => setProblemQuery("")}>
                            <ChevronUpDownIcon className="w-6" />
                          </Combobox.Button>
                          <Combobox.Options className="absolute w-full mt-1 bg-gray-200 dark:bg-gray-800 p-1 rounded-md shadow-md z-10">
                            {filteredProblems.map(problem => (
                              <Combobox.Option key={problem.id} value={problem}>
                                {({ active }) => (
                                  <div className={`${active ? "bg-gray-300 dark:bg-gray-700" : ""} p-2 rounded-md`}>
                                    {problem.description}
                                  </div>
                                )}
                              </Combobox.Option>
                            ))}
                          </Combobox.Options>
                        </div>
                      </Combobox>
                      :
                      <p className="text-gray-500">No problems found</p>
                    }
                  </div>
                </div>
                <div onClick={() => setIsExistingProblem(false)} className={`rounded-md p-4 flex-1 flex items-center gap-4 border-gray-200 dark:border-gray-800 border-2 cursor-pointer min-w-0 ${!problemSource ? "!border-sky-500" : ""}`}>
                  <div className={`w-8 aspect-square ${!problemSource ? "bg-sky-500" : "bg-gray-200 dark:bg-gray-700"} rounded-full flex justify-center items-center`}>
                    {!problemSource && <CheckIcon className="w-6 text-gray-300" style={{ strokeWidth: 3 }} />}
                  </div>
                  <div className="h-full w-full min-w-0">
                    <strong>New Problem</strong>
                    <p>Describe your problem below</p>
                    <RichTextEditor ref={problemRef} readOnly={problemSource} />
                  </div>
                </div>
              </div>
              <Transition
                show={selectedProblem !== null && isExistingProblem}
                enter="transition-all duration-75 overflow-hidden"
                enterFrom="scale-y-0 -translate-y-1/2 opacity-0"
                enterTo="scale-y-full translate-y-0 opacity-100"
                leave="transition-all duration-150 overflow-hidden"
                leaveFrom="scale-y-full translate-y-0 opacity-100"
                leaveTo="scale-y-0 -translate-y-1/2 opacity-0"
                className="flex gap-2"
              >
                <div className="bg-gray-200 dark:bg-gray-800 rounded-md mt-4 p-4 px-8 w-full">
                  <strong>Solutions</strong>
                  <p>Try these before continuing</p>
                  <ul className="checkboxes mt-2">
                    {selectedProblem && selectedProblem.solutions.map(solution => <li key={solution}>
                      <label className="flex">
                        <input type="checkbox" className="mr-2 w-5 aspect-square accent-sky-500" />
                        {solution}
                      </label>
                    </li>)}
                  </ul>
                </div>
              </Transition>
            </li>
            <li>
              <p className="my-2">Upload pictures <i>(Optional)</i></p>
              <AddImage setImages={setImages} />
            </li>
            <li>
              <p className="my-2">Describe the details</p>
              <div className="flex flex-col xl:flex-row gap-2" tabIndex={0}>
                <div className="flex-1 min-w-0">
                  What do you see?
                  <RichTextEditor ref={seeRef} />
                </div>
                <div className="flex-1 min-w-0">
                  What do you expect?
                  <RichTextEditor ref={expectRef} />
                </div>
                <div className="flex-1 min-w-0">
                  What have you tried already?
                  <RichTextEditor ref={triedRef} />
                </div>
              </div>
            </li>
            <li>
              <p className="my-2">Submit</p>
              <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
            </li>
          </ol>
          :
          <p>Loading...</p>}
      </div>
    </div>
  );
}