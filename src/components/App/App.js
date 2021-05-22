import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Calendar from "../Calendar/Calendar";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
