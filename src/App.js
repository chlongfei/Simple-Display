import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Manage from './views/manage/manage';
import Viewer from './views/viewer/viewer';



function View(prop){
  switch(prop.mode){
    case 1:
      return <Manage/>
    case 2:
      return <Viewer/>
    default:
      return <Manage/>
  }
}


function App() {

  var mode = 2;
  return(
    <div className="App">
      <View mode={mode}/>
    </div>
  )
  
}

export default App;
