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
        activity: false,
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

            <div className="form-group mt-3 mb-3">
                <label htmlFor="activity">Activity</label>
                <input
                    type="checkbox"
                    name="activity"
                    id="activity"
                    checked={user.activity}
                    onChange={(e) => setUser(prevState => ({ ...prevState, activity: e.target.checked }))}
                />
            </div>

            <div className="form-group">
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
            <button type="submit" className="btn btn-primary mt-3">
                Create
            </button>
        </form>
    );
};

export default UserForm;


