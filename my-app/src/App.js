import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const produce = [
  { name: "Apple",       type: "Fruit" },
  { name: "Banana",      type: "Fruit" },
  { name: "Carrot",      type: "Vegetable" },
  { name: "Dragonfruit", type: "Fruit" },
  { name: "Eggplant",    type: "Vegetable" },
  { name: "Fennel",      type: "Vegetable" },
];

function App() {
  return (
    <div className="App">
      <HelloWorld name="Chinenyenwa" />
      <Counter />
      <FilteredList items={produce} />
    </div>
  );
}

export default App;
