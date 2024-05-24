import UserResults from "./UserResults";
import "./App.css";
import { InfoProvider } from "./Contexts/InfoProvider";

function App() {
  return (
    //dependancy injection in react, wrapping of the application in the provider 
    <InfoProvider>
    <div className="mainBody">
      <div className="mainColumn">
        <Welcome />
        <UserResults />
      </div>
    </div>
    </InfoProvider>
  );
}

const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <h1>Welcome to the Corbel Interview</h1>
      <p>There are a few bugs throughout the code base that you need to solve.</p>
      <p>Tasks will turn green once they are completed</p>
    </div>
  );
};

export default App;
