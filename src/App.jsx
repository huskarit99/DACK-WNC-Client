import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './parts/containers/Header/Header';
import MenuBar from './parts/containers/MenuBar/MenuBar';

const App = () => {
  return (
    <div>
      <MenuBar />
      <Header />
      <Register/>
    </div>

  );
}

export default App;
