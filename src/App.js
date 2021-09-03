import './App.css';
import GetUserComponent from './components/GetUserComponent'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <GetUserComponent/>
        <WelcomePage/>
     </div>
    </div>
  );
}

export default App;
