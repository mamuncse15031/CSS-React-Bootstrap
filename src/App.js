import './App.css';
import JsonLinst from './mycomponents/JsonLinst';
import List from './mycomponents/List';
import Select from './mycomponents/Select';
/*import Welcome from './mycomponents/Welcome'
import Arrow from './mycomponents/Arrow'
import StateObj from './mycomponents/StateObjClass'
import SetStateClassCompo from './mycomponents/SetStateClassCompo';
import Condition1Class from './mycomponents/Condition1Class'
import Condition2ElementClass from './mycomponents/Condition2ElementClass'
import Refresh from './mycomponents/Refresh'
import NewDemoRender from './mycomponents/NewDemoRender'
import NewDemoHydrate from './mycomponents/NewDemoHydrate'
import DemoFindDomeNode from './mycomponents/DemoFindDomeNode'
import Form from './mycomponents/Form'*/
import SignupForm from './mycomponents/SignupForm'
import TextArea from './mycomponents/TextArea';


function App() {
  return (
    <div className="App">

      {/*<Welcome></Welcome>
      <Arrow></Arrow>
      <StateObj></StateObj>
      <SetStateClassCompo></SetStateClassCompo>
      <Condition1Class></Condition1Class>
      <Condition2ElementClass></Condition2ElementClass>
      <Refresh></Refresh>
      <NewDemoRender></NewDemoRender>
      <NewDemoHydrate></NewDemoHydrate> 
      <DemoFindDomeNode></DemoFindDomeNode>

      <Form></Form>*/} 

      <SignupForm></SignupForm>
      <TextArea></TextArea>
      <Select></Select>
      <List></List>
      <JsonLinst></JsonLinst>

      
      
    </div>
  );
}

export default App;
