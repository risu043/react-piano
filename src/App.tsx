import './App.css';
import Piano from './Piano.tsx';

function App() {
  return (
    <>
      <div className="piano-container">
        <img className="background" src="images/wood.jpg" />

        <h1 className="title">React Piano</h1>
        <Piano />
      </div>
    </>
  );
}

export default App;
