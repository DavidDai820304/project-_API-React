import "./styles/style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Photo from "./pages/Photo";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/photo" exact>
          <Photo />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
