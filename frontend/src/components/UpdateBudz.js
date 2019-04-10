import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import '../styles/styles.css'

const SINGLE_BUD_QUERY= gql`
    query SINGLE_BUD_QUERY($id: ID!){
        bud(where: {id: $id}){
            id
            budStrain
            budType
            budTHC
            budCBD
            budImage
            budGramPrice
        }
    }
`;


const UPDATE_BUD_MUTATION = gql`
    mutation UPDATE_BUD_MUTATION(
        $id: ID!,
        $budStrain: String,
        $budType: String,
        $budTHC: String,
        $budCBD: String,
        $budImage: String,
        $budGramPrice: Int
    ){
        updateBud(
            id: $id,
            budStrain: $budStrain,
            budType: $budType,
            budTHC: $budTHC,
            budCBD: $budCBD,
            budImage: $budImage,
            budGramPrice: $budGramPrice
        ){
            id
            budStrain
            budType
            budTHC
            budCBD
            budImage
            budGramPrice
        }
    }
`;

class UpdateBud extends Component{
  
    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value): value;
        this.setState({ [name]: val });
    }

    updateBud = (e, updateBudMutation ) => {
        e.preventDefault();
        console.log('Updating Current Bud...');
        console.log(this.state);

        const res = updateBudMutation({
            variables: {
                id: this.props.bud.id,
                ...this.state
            }
        })
        console.log('Updated Bud!')
    }


    render(){
        return(
            <Query query={SINGLE_BUD_QUERY} variables={{
                id: this.props.bud.id
            }}>

            {({data, loading}) => {
                

                if(loading) return <p>Loading...</p>
                if(!data) return <p>No bud found for ID {this.props.bud.id}</p>

                return(
                    <Mutation mutation={UPDATE_BUD_MUTATION} variables={this.state}>
                        {( updateBud, {loading, error}) => (
                            <div>
                                <button id="editButton" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Edit
                                </button>
                                <div className="collapse" id="collapseExample">
                                   
                                <div className="container" id="formContainer">
                                    <form onSubmit={e => this.updateBud(e, updateBud)}>
                                        <div className="form-group">
                                            <label id="inputLabel" htmlFor="budStrain">Bud Strain</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="budStrain"
                                                name="budStrain"
                                                placeholder="Bud Strain"
                                                defaultValue={this.props.bud.budStrain}
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
                                                placeholder="Bud Type"
                                                defaultValue={this.props.bud.budType}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="budTHC">Bud THC</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="budTHC"
                                                name="budTHC"
                                                placeholder="Bud THC%"
                                                defaultValue={this.props.bud.budTHC}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="budCBD">Bud CBD</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="budCBD"
                                                name="budCBD"
                                                placeholder="Bud CBD%"
                                                defaultValue={this.props.bud.budCBD}
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
                                                placeholder="Bud Image"
                                                defaultValue={this.props.bud.budImage}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="budGramPrice">Bud Gram Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="budGramPrice"
                                                name="budGramPrice"
                                                placeholder="$ per Gram"
                                                defaultValue={this.props.bud.budGramPrice}
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </div>
                                        <button id="editButton" className="btn btn-success" type="submit">Sav{loading ? 'ing' : 'e'} changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        )}
                    </Mutation>
                    )
                }}
            </Query>
        )
    }
}

export default UpdateBud