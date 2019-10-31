import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const CREATE_BUD_MUTATATION = gql`
    mutation CREATE_BUD_MUTATATION(
        $budStrain: String!
        $budType: String!
        $budTHC: String!
        $budCBD: String!
        $budImage: String!
        $budGramPrice: Int!
    ){
        createBud(
            budStrain: $budStrain
            budType: $budType
            budTHC: $budTHC
            budCBD: $budCBD
            budImage: $budImage
            budGramPrice: $budGramPrice
        ){
            id
        }
    }
`;

class CreateBud extends Component{
    state = {
        budStrain: '',
        budType: '',
        budTHC: '',
        budCBD: '',
        budImage: '',
        budGramPrice: 0
    }

    handleChange = e => {
        const { name, type, value} = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val })
    }

    render(){
        return(
            <Mutation mutation={CREATE_BUD_MUTATATION} variables={this.state}>
                {( createBud, {loading, error }) => (
                    <div id="formContainer">
                        <Link to={{ pathname: "/budz"}}><button id="createButton" className="btn">RETURN <i id="btnIcon" class="fas fa-undo"></i></button></Link>
                        <fieldset disabled={loading}>

                        <form onSubmit={e => {e.preventDefault(); createBud().then(
                            setTimeout(function(){
                                window.location.replace('/budz');
                            }, 1000)
                         )}}>
                            <div className="form-group">
                                <label htmlFor="budStrain">Bud Strain</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="budStrain"
                                        name="budStrain"
                                        placeholder="Ex: Blue Kush"
                                        value={this.state.budStrain}
                                        onChange={this.handleChange}
                                        required
                                    />
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="budType">Bud Type</label>
                                    <input
                                        type="text"
                                        className="form-control"                                        
                                        id="budType"
                                        name="budType"
                                        placeholder="Ex: Sativa"
                                        value={this.state.budType}
                                        onChange={this.handleChange}
                                        required
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor="budTHC">Bud THC%</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="budTHC"
                                        name="budTHC"
                                        placeholder="Ex: 50.00%"
                                        value={this.state.budTHC}
                                        onChange={this.handleChange}
                                        required
                                    />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="budCBD">Bud CBD%</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="budCBD"
                                        name="budCBD"
                                        placeholder="Ex: 40.00%"
                                        value={this.state.budCBD}
                                        onChange={this.handleChange}
                                        required
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor="budImage">Bud Image</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="budImage"
                                        name="budImage"
                                        placeholder="Ex: http://www.something.com/something.jpg"
                                        value={this.state.budImage}
                                        onChange={this.handleChange}
                                        required
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor="budGramPrice">$ per Gram</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="budGramPrice"
                                        name="budGramPrice"
                                        value={this.state.budGramPrice}
                                        onChange={this.handleChange}
                                        required
                                    />
                            </div>
                            
                            <button id="editButton" className="btn btn-success" type="submit">CREAT{loading ? 'ING' : 'E'}</button>
                        </form>
                    </fieldset>
                 </div>
                )} 
            </Mutation>
        )
    }
}

export default CreateBud;