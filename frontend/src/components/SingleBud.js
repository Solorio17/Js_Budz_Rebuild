
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Bud from './Bud';
import UpdateBud from './UpdateBudz';

const SINGLE_BUD_QUERY = gql`
    query SINGLE_BUD_QUERY($id: ID!){
        bud(where: { id: $id }){
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

class SingleBud extends Component{
    constructor(props){
        super(props)

    }
    

    render(){

        var getParams = function (url) {
            var params = {};
            var parser = document.createElement('a');
            parser.href = url;
            var query = parser.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                params[pair[0]] = decodeURIComponent(pair[1]);
            }
            return params;
        };


        const url = getParams(window.location.href)

        // console.log(url.id)
        return(
            <Query query={SINGLE_BUD_QUERY} variables={{
                id: url.id
            }}>
            {({error, loading, data}) => {
                if(loading) return <p>Loading...</p>
                if(!data) return <p>No item found for {this.props.id}</p>
                return(
                    <div>
                        <Bud bud={data.bud}/>
                        <UpdateBud bud={data.bud}/>
                    </div>
                )
            }}
            </Query>
        )
    }
}

export default SingleBud;