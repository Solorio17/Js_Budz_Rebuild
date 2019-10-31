import React, { Component } from 'react';


class Bud extends Component{
    render(){
        // console.log(this.props.bud)

        return(
          <div className="cardContainer" key={this.props.bud.id}>
            <div id="ow-card" className="card" >
              <img id="ow-img" src={this.props.bud.budImage} className="card-img-top" alt="Bud"></img>
              <div id="ow-cardBody" className="card-body">
                <h5 id="ow-cardTitle" className="card-title"><span id="strain">Strain Name:</span> {this.props.bud.budStrain}</h5>
                <h5 id="ow-cardTitle2" className="card-title"><span id="type">Bud Type:</span> {this.props.bud.budType}</h5>
                <p id="ow-cardTextTHC" className="card-text"><span id="thc">THC: </span> {this.props.bud.budTHC}</p>
                <p id="ow-cardTextCBD" className="card-text"><span id="cbd">CBD:</span> {this.props.bud.budCBD}</p>

                <div className="bottomRow">
                  <p id="ow-cardTextPrice" className="card-text"><span id="price">$ per gram: </span>{this.props.bud.budGramPrice}</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Bud;