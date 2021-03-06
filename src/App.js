import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Modal from "./components/Modal";
import LoginPage from "./Pages/LoginPage";
import Cart from "./components/Cart.jsx";
import RegisterPage from "./Pages/RegisterPage";
import AdminPage from "./Pages/AdminPage";
import EditUser from "./Pages/EditUser";
import Categories from "./components/Categories";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <PublicRoute restricted={true} component={LoginPage} exact path="/" /> */}
          <Route path="/article/:slug" component={Modal} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/categories" component={Categories} />
          <Route path="/about-us" component={AboutUs} />

          <Route exact path="/profile" component={EditUser} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
