import Toolbar from "./components/Toolbar/Toolbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import './App.css';

const App = () => {


  return (
      <>
          <header>
              <Toolbar />
          </header>

          <main className="container-fluid">
              <div className="row">
                  <div className="col-6">
                      Form
                      <UserForm  />
                  </div>

                  <div className="col-6">
                      Users
                      <Users  />
                  </div>

              </div>
          </main>
      </>
  );
};

export default App;
