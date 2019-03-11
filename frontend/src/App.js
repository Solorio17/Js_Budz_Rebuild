import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Query = gql`
{
  budList{
    budStrain
    budType
    budTHC
    budCBD
    budImage
    budGramPrice
    id
  }
}
`;


class App extends Component{
  render(){
    const {data: {loading, budList}} = this.props;
    if(loading){
      return null;
    }

      const listOfBudz = budList.map(bud =>(
          <div className="container">
            <div className="card" id="carta">
              <div className="row">
                <div className="col-md-4">
                    <img src={bud.budImage} className="budImage" alt="budImage"></img>
                  </div>
                  <div className="col-md-8" id="cardInfo">
                    <div className="card-block">
                      <h5 className="card-title lead">Strain Name: <span className="budStrain">{bud.budStrain}</span></h5>
                      <p className="card-text lead">Type: <span className="budType">{bud.budType}</span></p>
                      <p className="card-text lead">THC%: <span className="budTHC">{bud.budTHC}</span></p>
                      <p className="card-text lead">CBD%: <span className="budCBD">{bud.budCBD}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      ))

    return(
      listOfBudz
    )
  }
}

export default graphql(Query)(App);