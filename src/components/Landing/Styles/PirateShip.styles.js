import htmlStyled from 'styled-components';

import SeaAnchor from 'src/assets/Landing/sea-anchor.png';

export const PirateShipDiv = htmlStyled.div`
    padding-top : 50px;
    padding-bottom : 80px;

    background-image : url('${SeaAnchor}') ;
    background-position : left bottom;
    background-repeat : no-repeat no-repeat;
    background-size : 200px 250px;

    p {
        text-align : center ;
    }

    display : flex;
    flex-direction : column;
    align-items : center;

    position : relative;
`

export const FilterDiv = htmlStyled.div`
    position : absolute;
    background : #ffffff52 ;

    left : 0px;
    top : 300px;

    width : 100%;
    height : calc(100% - 300px);
`

export const SuffixLetter = htmlStyled.p`
    color: #E7D58B;
    font-family: "Playball", Sans-serif;
    font-size: 22px;
    font-weight: 200;
`

export const TitleParagraph = htmlStyled.p`
    color: #E8B923;
    font-family: "Carter One", Sans-serif;
    font-size: 48px;
    text-transform: captalize;
    line-height: 88px;
`
export const OpacityDiv = htmlStyled.div`
    background-color : #FFFFFF8A;
    border-radius : 20px;

    width : 80%;
    backdrop-filter: blur(4px);

    margin-top : 40px;

`
export const Number = htmlStyled.p`
    color: #E7D58B;
    font-family: "Playfair Display", Sans-serif;
    font-size: 100px;
`

export const Label = htmlStyled.p`
    color: #000000;
    font-family: "Playfair Display", Sans-serif;
    font-size : 20px;

    padding-bottom : 30px;
`
export const Description = htmlStyled.p`
    text-align : center;
    color : #54595F;

    padding-bottom : 40px;
`