import * as React from 'react';

import { connect } from 'react-redux';
import { FetchOurNfts } from 'src/redux/actions/nft';

import { useWalletInfo } from 'src/contexts/WalletContext';

import { SmallTitle, Title } from './Styles/Sea.styles';
import { WaveDiv, WaveLine } from './Styles/MintNow.styles';

import { OurNFTDiv, MainDiv, TimerDiv, PadDiv, Number, Unit, BackOverlay, LoadingDiv } from './Styles/OurNFT.styles';

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination, Navigation } from "swiper";

import Loading from 'react-loading-components';

import NFT183 from 'src/assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-183-1-768x768.jpg';
import NFT263 from 'src/assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-263-1-768x768.jpg';
import NFT667 from 'src/assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-667-1-768x768.jpg';
import NftView from './Modals/NftView';

const OurNFT = (props) => {

    const {
        web3Provider
    } = useWalletInfo() ;

    const {
        nfts,
        FetchOurNfts
    } = props ;

    const [isOpenNftView, setOpenNftView] = React.useState(false);
    const [nft_data,  setNftData] = React.useState({}) ;

    const handleOpenNftView = () => { setOpenNftView(true) }
    const handleCloseNftView = () => { setOpenNftView(false) }

    React.useEffect(() => {
        if(web3Provider) FetchOurNfts(web3Provider);
    }, [web3Provider]) ;

    React.useEffect(() => {
        console.log(nfts) ;
    }, [nfts]) ;

    return (
        <OurNFTDiv>
            <BackOverlay />
            <MainDiv>
                <SmallTitle > Gallary</SmallTitle>
                <Title style={{color : '#28364B !important'}}>Our NFTs</Title>
                <WaveDiv>
                    {
                        [...Array(5)].map((item, index) => (
                            <WaveLine key={index}/>
                        ))
                    }
                </WaveDiv>

                { nfts ? <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        nfts.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={NFT183} onClick={() => {
                                    setNftData(item)
                                    handleOpenNftView();
                                }}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper> : <LoadingDiv>
                    <Loading type='bars' width={100} height={100} fill='#E8B923'/>
                </LoadingDiv> }
                
                <TimerDiv>
                    <PadDiv>
                        <Number>30</Number>
                        <Unit>Days</Unit>
                    </PadDiv>
                    <PadDiv>
                        <Number>03</Number>
                        <Unit>Hours</Unit>
                    </PadDiv>
                    <PadDiv>
                        <Number>43</Number>
                        <Unit>Minutes</Unit>
                    </PadDiv>
                    <PadDiv>
                        <Number>29</Number>
                        <Unit>Seconds</Unit>
                    </PadDiv>
                </TimerDiv>
            </MainDiv>
            <NftView 
                open={isOpenNftView}
                handleClose={handleCloseNftView}
                nft_data={nft_data}
            />
        </OurNFTDiv>
    )
}

const mapStateToProps = state => ({
    nfts : state.nft.nfts
})
const mapDispatchToProps = {
    FetchOurNfts
}
export default connect(mapStateToProps, mapDispatchToProps)(OurNFT);