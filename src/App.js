import './App.css';
import Welcome from './mycomponents/Welcome'
import Arrow from './mycomponents/Arrow'
import StateObj from './mycomponents/StateObjClass'
import SetStateClassCompo from './mycomponents/SetStateClassCompo';
import Condition1Class from './mycomponents/Condition1Class'
import Condition2ElementClass from './mycomponents/Condition2ElementClass'

function App() {
  return (
    <div className="App">

      <Welcome></Welcome>
      <Arrow></Arrow>
      <StateObj></StateObj>
      <SetStateClassCompo></SetStateClassCompo>
      <Condition1Class></Condition1Class>
      <Condition2ElementClass></Condition2ElementClass>
      
    </div>
  );
}

export default App;
