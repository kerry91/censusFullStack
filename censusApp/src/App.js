import './App.css';
import Census from './component/Census';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h3>Census Data</h3>
          <Census></Census>
          <hr/>
        </p>
      </header>
    </div>
  );
}

export default App;
