import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


const DELETE_BUD_MUTATION = gql`
    mutation DELETE_BUD_MUTATION($id: ID!){
        deleteBud(where: {id: $id}){
            id
        }
    }
`;

class DeleteBud extends Component{
    render(){
        return(
            <Mutation mutation={DELETE_BUD_MUTATION} variables={{ id: this.props.id}}>
                {(deleteBud, {loading, error}) => (
                    <button id="deleteButton" className="btn" onClick={()=> {
                        if(window.confirm('Are you sure you want to delete this?')){
                            // deleteBud().then(window.location.replace('/budz'))
                            deleteBud().then(
                                setTimeout(function(){
                                    return window.location.replace('/budz');
                                }, 1000)
                            )
                        }
                    }}>
                        DELET{loading ? 'ING' : 'E'} <i id="btnIcon" className="fas fa-trash"></i>
                    </button>
                )}
            </Mutation>
        )
    }
}

export default DeleteBud