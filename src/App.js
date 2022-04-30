import './App.css';
import { Header } from './frontend/component';
import { Routers } from './frontend/Router/Router';


function App() {
  return (
    <div className="App" id='App'>
        <Header/>
        <Routers/>
    </div>
  );
}

export default App;
