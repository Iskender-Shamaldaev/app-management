import React, {useState} from 'react';
import {IUser, IUserMutation} from "../../types";
import {nanoid} from "nanoid";

interface Props {
    onSubmit: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState <IUserMutation>({
        name: '',
        email: '',
        activity: false,
        image: '',
        role: ''
    });

    const userChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

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
                <label htmlFor="image">Email</label>
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
                <select className="mt-3 mb-3 w-100 h5">
                    <option>Activity</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                </select>
            </div>


            <div className="form-group">
                <select className="mb-3 w-100 h5">
                    <option>Role</option>
                    <option value="1">User</option>
                    <option value="2">Editor</option>
                    <option value="2">Admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserForm;