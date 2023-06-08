import React from 'react';
import { IUser} from "../../types";

interface Props {
    user: IUser;
    activityMessage: string;
}

const UserItem: React.FC<Props> = ({user, activityMessage}) => {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eUwh4CgNCQrz-auGwiZWEUHJUR4PfVEx6w&usqp=CAU';
    const image = user.image || imageUrl;

    const imageStyle: React.CSSProperties = {
        background: `url(${image}) left / cover no-repeat`,
    };


    return (
        <div className="card mb-2">
            <div className="row no-gutters">
                <div className="col-sm-4 rounded-start" style={imageStyle}/>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text small">{user.email}</p>
                        <p className="card-text">{user.activity}</p>
                        <p className="card-text">{activityMessage}</p>
                        <p className="card-text">{user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;