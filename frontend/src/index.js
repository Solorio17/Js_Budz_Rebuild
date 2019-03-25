import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Budz from './Budz';

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
