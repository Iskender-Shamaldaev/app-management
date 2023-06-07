import Toolbar from "./components/Toolbar/Toolbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import './App.css';
import {IUser} from "./types";
import {useState} from "react";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([
        {id: '1', name: 'Sasha', email: 'sasha.@mail.ru', activity: true, image: '', role: 'user'},
        {id: '2', name: 'Andrei', email: 'andrei.@mail.ru', activity: true, image: '', role: 'editor'},
        {id: '2', name: 'Sergei', email: 'sergei.@mail.ru', activity: true, image: '', role: 'admin'},
    ]);

    const addItem = (newUser: IUser) => {
        setUsers(prevState => [...prevState, newUser]);
    };

  return (
      <>
          <header>
              <Toolbar />
          </header>

          <main className="container-fluid">
              <div className="row">
                  <div className="col-4">
                      <UserForm onSubmit={addItem} />
                  </div>

                  <div className="col-4">
                      <Users items={users} />
                  </div>

              </div>
          </main>
      </>
  );
};

export default App;
