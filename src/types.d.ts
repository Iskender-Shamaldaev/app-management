export interface IUser {
    id: string;
    name: string;
    email: string;
    activity: boolean;
    image: string;
    role: string;
}

export interface IUserMutation {
    name: string;
    email: string;
    activity: boolean;
    image: string;
    role: string;
}