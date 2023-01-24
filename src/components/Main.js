import * as React from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import { WalletProvider } from '../contexts/WalletContext';

import Routing from './Routes';
import Footer from './Layouts/Footer';

import { ToastContainer } from 'react-toastify/dist/react-toastify';

import 'swiper/swiper.min.css';
import "swiper/modules/navigation/navigation.min.css";

import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'

const Main = (props) => {
    const {
        provider,
        walletAddress,
        chainData,
        isWalletConnected,
        web3Provider
    } = props ;

    return (
        <>
            <WalletProvider 
                value={{
                    provider,
                    web3Provider ,
                    walletAddress ,
                    chainData ,
                    isWalletConnected
                }}
            >
                <Routing />
                <Footer />
            </WalletProvider>
            <ToastContainer />
        </>
    )
}

Main.propTypes = {
    
}
const mapStateToProps = state => ({
    provider : state.wallet.provider,
    walletAddress : state.wallet.walletAddress,
    chainData : state.wallet.chainData,
    isWalletConnected : state.wallet.isWalletConnected,
    web3Provider: state.wallet.web3Provider,
}) ;
const mapDispatchToProps = {
   
} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;