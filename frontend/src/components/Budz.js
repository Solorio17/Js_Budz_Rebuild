import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const ALL_BUDZ_QUERY = gql`
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

class Budz extends Component{ 
  render(){
    return(
      <Query query={ALL_BUDZ_QUERY}>
        {({data, error, loading}) => {
          
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error: {error}</p>
          return <div>{data.budList.map(bud =>  <div className="cardContainer" key={bud.id}>
                <div id="ow-card" className="card">
                  <img id="ow-img" src={bud.budImage} className="card-img-top" alt="Bud"></img>
                  <div id="ow-cardBody" className="card-body">
                    <h5 id="ow-cardTitle" className="card-title"><span id="strain">Strain Name:</span> {bud.budStrain}</h5>
                    <h5 id="ow-cardTitle2" className="card-title"><span id="type">Bud Type:</span> {bud.budType}</h5>
                    <p id="ow-cardTextTHC" className="card-text"><span id="thc">THC: </span> {bud.budTHC}</p>
                    <p id="ow-cardTextCBD" className="card-text"><span id="cbd">CBD:</span> {bud.budCBD}</p>

                    <div className="bottomRow">
                      <Link to={{
                          pathname: "/singleBud",
                          search: `id=${bud.id}`,
                        }}>
                        <button className="btn btn-warning" type="button" >View</button>
                      </Link>
                      <p id="ow-cardTextPrice" className="card-text"><span id="price">$ per gram: </span>{bud.budGramPrice}</p>
                    </div>
                  </div>
                </div>
            </div>
            )}
          </div>
        }}
      </Query>
    )
  }
}

export default Budz