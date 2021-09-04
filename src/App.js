import './App.css';
import {useState} from 'react';
import GetUserComponent from './components/GetUserComponent'
import WelcomePage from './components/WelcomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("")



  return (
    <div className="App">
      <div className="App-header">
        <GetUserComponent
          user = {user}
          setUser ={setUser}
        />
        <WelcomePage
          user = {user}
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
        />
     </div>
    </div>
  );
}

export default App;
