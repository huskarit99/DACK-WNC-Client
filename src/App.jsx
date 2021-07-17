import "./App.css";
import Home from "./pages/Home/Home";
import Logo from "./parts/containers/Logo/Logo";
import Header from "./parts/containers/Header/Header";
import MenuBar from "./parts/containers/MenuBar/MenuBar";
import BreadCome from "./parts/containers/BreadCome/BreadCome";

const App = () => {
  return (
    <div>
      <MenuBar />
      <div class="all-content-wrapper">
        <Logo />
        <Header />
        <BreadCome />
        {/* Switch, Route */}
        <Home />
      </div>
    </div>
  );
};

export default App;
