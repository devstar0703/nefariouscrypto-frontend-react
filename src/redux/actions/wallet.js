import ActionTypes from "./actionTypes" ;

export const UpdateWalletData = (walletData, isWalletConnected=true) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.UpdateWalletData,
            payload : {
                provider : walletData.provider,
                web3Provider : walletData.web3Provider,
                walletAddress : walletData.walletAddress,
                chainData  : walletData.chainData,
                isWalletConnected : isWalletConnected
            }
        }) ;
        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}