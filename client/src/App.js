import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/result' component={Result} />
   
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
