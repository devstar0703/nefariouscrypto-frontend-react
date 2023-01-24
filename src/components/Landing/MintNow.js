import * as React from 'react' ;

import { useWalletInfo } from 'src/contexts/WalletContext';

import MetamaskConn from 'src/components/Common/Wallets/MetamaskConn';

import Header from 'src/components/Layouts/Header';

import { 
    MintButton,
    MintNowDiv, TitleParagraph,
    RopeLine,
    WhatWeDoDiv, BackOverlay,
    WaveLine, WaveDiv,TopDiv,
    MainDiv, StrongBackOverlay,
    Row
} from './Styles/MintNow.styles';
import MintNft from './Modals/MintNft';

const MintNow = (props) => {

    const {
        isWalletConnected
    } = useWalletInfo() ;

    const [isOpenMintModal, setOpenMintModal] = React.useState(false) ;
    
    const handleOpenMintModal = () => { setOpenMintModal(true) }
    const handleCloseMintModal = () => { setOpenMintModal(false) }

    return (
        <TopDiv>
            <StrongBackOverlay/>
            <MainDiv>
                <MintNowDiv>
                    <TitleParagraph >
                        NFT PIRATE SHIP LIFE
                        COLLECTION
                    </TitleParagraph>
                    <Row>
                        <MintButton disabled={!isWalletConnected} onClick={() => handleOpenMintModal()}>Mint Now</MintButton>
                        <MetamaskConn />
                    </Row>
                </MintNowDiv>
                <RopeLine />
                <BackOverlay>
                    <WhatWeDoDiv >
                        What we do
                        <WaveDiv>
                            {
                                [...Array(5)].map((item, index) => (
                                    <WaveLine key={index}/>
                                ))
                            }
                        </WaveDiv>
                    </WhatWeDoDiv>
                </BackOverlay>
            </MainDiv>
            <Header />

            <MintNft 
                open={isOpenMintModal}
                handleClose={handleCloseMintModal}
            />
        </TopDiv>
    )
}

export default MintNow;