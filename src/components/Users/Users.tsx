import React from 'react';
import { IUser } from "../../types";
import UserItem from "./UserItem";
import { nanoid } from "nanoid";

interface Props {
    items: IUser[];
}

const Users: React.FC<Props> = ({ items }) => {
    return (
        <>
            <h4>Users</h4>
            {items.map((item) => (
                <UserItem key={nanoid()} user={item} activityMessage={item.activity ? 'Active' : 'Inactive'} />
            ))}
        </>
    );
};

export default Users;
