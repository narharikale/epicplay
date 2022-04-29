import './App.css';
import { Header} from './frontend/component';
import { Routers } from './frontend/Router/Router';
import { Home } from './frontend/screen';


function App() {
  return (
    <div className="App" id='App'>
        <Header/>
        <Routers/>
    </div>
  );
}

export default App;
