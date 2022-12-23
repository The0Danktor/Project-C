export type Problem = {
  id: string;
  machineId: string;
  description: string;
  solutions: string[]
}

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyId: string;
  role: string;
  resetpassword: boolean;
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

export type LoginProps = {
  email: string;
  password: string;
}
