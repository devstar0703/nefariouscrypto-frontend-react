import ActionTypes from '../actions/actionTypes' ;

const INITIAL_STATE = {
    nfts : null
}

export default (state=INITIAL_STATE , action={}) => {
    switch(action.type) {
        case ActionTypes.FetchOurNfts : 
            return ({
                ...state,
                nfts : action.payload
            });
        default :
            return state ; 
    }
}