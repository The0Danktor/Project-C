export type Problem = {
  id: string;
  machineId: string;
  description: string;
  solutions: string[]
}

export type Machine = {
  id: string;
  name: string;
}

export type CompanyMachine = {
  id: string;
  name: string;
  tekennummer: string;
  companyId: string;
  machineId: string;
  type: string;
}
