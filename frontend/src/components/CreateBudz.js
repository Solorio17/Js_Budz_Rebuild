import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

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
                    <fieldset>
                        <form onSubmit={e => {e.preventDefault(); createBud(); }}>
                            <label>
                                Bud Strain
                                <input
                                    type="text"
                                    id="budStrain"
                                    name="budStrain"
                                    placeholder="Bud Strain"
                                    value={this.state.budStrain}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Bud Type
                                <input
                                    type="text"
                                    id="budType"
                                    name="budType"
                                    placeholder="Bud Type"
                                    value={this.state.budType}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Bud Image
                                <input
                                    type="url"
                                    id="budImage"
                                    name="budImage"
                                    placeholder="Bud Image"
                                    value={this.state.budImage}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Bud THC%
                                <input
                                    type="text"
                                    id="budTHC"
                                    name="budTHC"
                                    placeholder="Bud THC%"
                                    value={this.state.budTHC}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Bud CBD%
                                <input
                                    type="text"
                                    id="budCBD"
                                    name="budCBD"
                                    placeholder="Bud CBD%"
                                    value={this.state.budCBD}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <label>
                                $ per Gram
                                <input
                                    type="number"
                                    id="budGramPrice"
                                    name="budGramPrice"
                                    placeholder="$ per Gram"
                                    value={this.state.budGramPrice}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>

                            <button type="submit">Create Bud</button>

                        </form>
                    </fieldset>
                )} 
            </Mutation>
        )
    }
}

export default CreateBud;