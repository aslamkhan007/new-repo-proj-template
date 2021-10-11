import "./assets/css/style.css";  
import './App1.css'
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { PrivateRouter } from "./HOC/ProtectedRouter/PrivateRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Product } from "./components/Product";
import { Navigation } from "./components/Navigation";
import { Logout } from "./components/Logout";


function App() {
  return (
    <>
    {/* <Navigation/> */}
      <Switch>
        {/* <Route exact path="/product" component={Product} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        {/* <Route exact path="/register" component={Register} /> */}
     
        <PrivateRouter exact path ="/register" component ={Register}/>
        <PrivateRouter  path ="/home" component ={Home}/>
        <PrivateRouter exact path ="/product" component ={Product}/>

        <Route exact path="**">
          <Redirect to={{ pathname: "/" }} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
