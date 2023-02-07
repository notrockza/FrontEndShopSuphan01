export interface Login {
    email: string;
    password: string;
}

export interface Register  {
    name: string;
    email: string;
    password: string;
    tell: number;
    image:File ;
    roleID: number,
    role: Role
}


export interface Role {
    id : number;
    name : string;
}
