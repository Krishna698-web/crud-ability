import './App.css';
import Create from './Components/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
