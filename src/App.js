import './App.css';
import JsonLinst from './mycomponents/JsonLinst';
import List from './mycomponents/List';
import Select from './mycomponents/Select';
import SignupForm from './mycomponents/SignupForm'
import TextArea from './mycomponents/TextArea';


function App() {
  return (
    <div className="App">

      <SignupForm></SignupForm>
      <TextArea></TextArea>
      <Select></Select>
      <List></List>
      <JsonLinst></JsonLinst>

      
      
    </div>
  );
}

export default App;
