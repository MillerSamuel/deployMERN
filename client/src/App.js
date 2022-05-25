import './App.css';
import {BrowserRouter,Link,Route,Switch} from "react-router-dom"
import HomePage from './components/HomePage';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';



function App() {
  return (
    <div className="App p-2 container">
      <BrowserRouter>
        <h1 >Pet Shelter</h1>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/pets/new">
            <NewPet></NewPet>
          </Route>
          <Route exact path="/pets/:_id">
            <OnePet></OnePet>
          </Route>
          <Route exact path="/pets/:_id/edit">
            <EditPet></EditPet>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
