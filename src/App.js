import Header from './components/Header'
import SectionTwo from './components/SectionTwo'
import PageTwo from './components/PageTwo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <SectionTwo /><br /><br/><br/><br/>
        <Switch>
          <Route path="/components/PageTwo" component={PageTwo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
