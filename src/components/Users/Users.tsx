import React from 'react';
import {IUser} from "../../types";
import UserItem from "./UserItem";

interface Props {
    items: IUser[];
}

const Users: React.FC<Props> = ({items}) => {

    return (
        <>
            <h4>Dishes</h4>
            {items.map((item) => (
                <UserItem key={item.id} user={item}/>
            ))}
        </>
    );
};

export default Users;