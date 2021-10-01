import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Manage from './views/manage/manage';
import Viewer from './views/viewer/viewer';
import Landing from './views/landing/landing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return(
    <div class="App">
      <Router>
        <Route exact path="/viewer">
          <Viewer/>
        </Route>
        <Route exact path="/manager">
          <Manage/>
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
      </Router>
    </div>
  )
  
}

export default App;
