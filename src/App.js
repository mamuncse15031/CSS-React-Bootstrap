import './App.css';
import Welcome from './mycomponents/Welcome'
import Arrow from './mycomponents/Arrow'
import StateObj from './mycomponents/StateObjClass'
import SetStateClassCompo from './mycomponents/SetStateClassCompo';
import Condition1Class from './mycomponents/Condition1Class'

function App() {
  return (
    <div className="App">

      <Welcome></Welcome>
      <Arrow></Arrow>
      <StateObj></StateObj>
      <SetStateClassCompo></SetStateClassCompo>
      <Condition1Class></Condition1Class>
      
    </div>
  );
}

export default App;
