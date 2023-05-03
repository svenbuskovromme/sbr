
export type Project = {
    title: string,
    description: string,
    apps: App[],
    role: Role,
  }
export type Stack = {
    database: string,
    backend: string,
    frontend: string,
}

export type month = 'jan'|'feb'|'mar'|'apr'|'may'|'jun'|'jul'|'aug'|'sep'|'oct'|'nov'|'dec';
export type y = 0|1|2|3|4|5|6|7|8|9;
export type year = `20${y}${y}`;

export type Role = {
    title: string,
    description: string,
    from: `${month} ${year}`,
    to: `${month} ${year}`,
}
  
export type App = {
    name: string,
    description: string,
    stack: Stack,
    url?: string,
    role: Role,
    features: string[],
}