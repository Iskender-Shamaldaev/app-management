import React, { useState } from 'react';
import { IUser, IUserMutation } from "../../types";
import { nanoid } from "nanoid";

interface Props {
    onSubmit: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
    const [user, setUser] = useState<IUserMutation>({
        name: '',
        email: '',
        activity: true,
        image: '',
        role: ''
    });

    const userChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: nanoid(),
            ...user,
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Add new user</h4>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={userChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    onChange={userChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="activity">Activity</label>
                <select
                    name="activity"
                    id="activity"
                    className="form-control"
                    value={user.activity.toString()}
                    onChange={userChange}
                >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                    name="role"
                    id="role"
                    className="form-control"
                    value={user.role}
                    onChange={userChange}
                >
                    <option value="">Select role</option>
                    <option value="User">User</option>
                    <option value="Editor">Editor</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Create</button>
        </form>
    );
};

export default UserForm;
