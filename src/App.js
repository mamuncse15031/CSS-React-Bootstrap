import './App.css';
import Welcome from './mycomponents/Welcome'
import Arrow from './mycomponents/Arrow'
import StateObj from './mycomponents/StateObjClass'
import SetStateClassCompo from './mycomponents/SetStateClassCompo';

function App() {
  return (
    <div className="App">

      <Welcome></Welcome>
      <Arrow></Arrow>
      <StateObj></StateObj>
      <SetStateClassCompo></SetStateClassCompo>
      
    </div>
  );
}

export default App;
