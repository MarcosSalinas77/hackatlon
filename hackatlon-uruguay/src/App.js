import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import Home from './views/Home'

function App() {
  return (
    <AppRouter>
      <Home/>
    </AppRouter>
  );
}

export default App;
