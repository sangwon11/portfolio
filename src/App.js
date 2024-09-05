import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
