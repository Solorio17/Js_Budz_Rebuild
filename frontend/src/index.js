import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Budz from './components/Budz';
import CreateBud from './components/CreateBudz';
import SingleBud from './components/SingleBud';


const client = new ApolloClient({
    uri: 'http://localhost:4000'
})


class App extends Component {
    render(){
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/" exact render={
                  ()=>{
                    return (<Home /> );
                  }
                }/>
              <Route path="/budz" exact render={
                  ()=>{
                    return (<Budz /> );
                  }
                }/>
              <Route path="/createBudz" exact render={
                  ()=>{
                    return (<CreateBud /> );
                  }
                }/>
              <Route path="/singleBud" exact render={
                  ()=>{
                    return (<SingleBud /> );
                  }
                }/>
              <Route render={() => { return (<h3>Route not found!</h3>)}}/>
          </Switch>
         </div>
        </Router>
      );
    }
  }

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
