import NavBar from './components/Navbar'
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Router,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <  BrowserRouter>
       <NavBar/>   
        <Switch>
          <Route path='/' component={Home} exact> <Home/></Route>
          <Route path='/services' component={Services} exact> <Services/></Route>

          <Route path='/contact' component={Contact} exact> <Contact/></Route>
          <Route path='/about' component={About} exact> <About/></Route>

        </Switch>
       </  BrowserRouter>
 </div>
  );
}

export default App;
