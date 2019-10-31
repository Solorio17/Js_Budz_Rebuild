import React, { Component } from 'react';
import '../styles/styles.css'

class Home extends Component{
  render(){
    return(
      <div className="mainHomeContainer">

        <div>
          <a href="/budz">Budz</a>
        </div>
        <div>
          <a href="/dabz">Dabz</a>
        </div>
        <div>
          <a href="/ediblez">Ediblez</a>
        </div>
        <div>
          <a href="/accessoriez">Accessoriez</a>
        </div>
      </div>
    )
  }
}

export default Home;