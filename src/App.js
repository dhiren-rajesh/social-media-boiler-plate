import './App.css';
import Posts from './Posts';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ExtraBar from './ExtraBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="all-comp">
        <Sidebar/>
        <Posts/>
        <ExtraBar/>
      </div>
    </div>
  );
}

export default App;
