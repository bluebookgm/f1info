import './App.css';
import { RaceResults } from './components/RaceResults/RaceResults';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Router>
            <Routes>
            <Route
              path="/"
              element={<RaceResults />}
            />
            <Route path="/driver/:driverName" />
          </Routes>
          </Router>
      </div>
  );
}

export default App;
