import * as React from 'react';

import { PirateShipDiv, SuffixLetter,TitleParagraph, OpacityDiv, Number, Label, Description, FilterDiv } from './Styles/PirateShip.styles';
import { WaveDiv, WaveLine } from './Styles/MintNow.styles';

const PirateShip = () => {
    return (
        <PirateShipDiv>
            <FilterDiv />
            <SuffixLetter>About</SuffixLetter>
            <TitleParagraph>Pirate Ship Life NFTs</TitleParagraph>
            <WaveDiv>
                {
                    [...Array(5)].map((item, index) => (
                        <WaveLine key={index}/>
                    ))
                }
            </WaveDiv>

            <OpacityDiv>
                <Number>
                    888
                </Number>
                <Label>
                    NFTs Collection
                </Label>
                <Description>
                    Our collection contains 888 unique “POAP” NFTs POAP, or proof of attendance protocol, as the name suggests, is used as a virtual ticket to prove attendance or ownership be it a ceremony, private function, game, concert or something similar.
                </Description>
            </OpacityDiv>
        </PirateShipDiv>
    )
}

export default PirateShip ;