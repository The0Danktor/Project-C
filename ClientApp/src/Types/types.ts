import { ByRoleMatcher } from "@testing-library/react";

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

export type Ticket = {
  id: string;
  customerid : string;
  customer: Customer;
  user : User;
  availableusers : User[];
  tekennummer : string;
  companymachine : CompanyMachine;
  problemid : string;
  problem : Problem;
  note : string;
  workingontickets : string[];
  date : Date;
  status : string;
  priority : string;
}

export type User = {
  id : string;
  name : string;
  email : string;
  passwordhash : string;
  passwordsalt : string;
  phone : string;
  companyid : string;
  // company : Company
  // role : Role
  resetpassword : boolean;
  ticket : Ticket;
  workingontickets : string[];
  departmentemployees : string[];
}

export type Customer = {
  id : string;
  name : string;
  email : string;
  password : string;
  phone : string;
  companyid : string;
  // company : Company
  supervisor : boolean;
  tickets : Ticket[];
}