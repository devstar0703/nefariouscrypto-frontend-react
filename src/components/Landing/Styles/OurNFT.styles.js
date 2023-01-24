import htmlStyled from 'styled-components';

import SeaAnchor from 'src/assets/Landing/sea-anchor.png';

export const OurNFTDiv = htmlStyled.div`
    padding-top : 50px;
    padding-bottom : 80px;

    background-image : url('${SeaAnchor}') ;
    background-position : right bottom;
    background-repeat : no-repeat no-repeat;
    background-size : 200px 250px;

    position : relative;

    & .swiper {
        margin-top : 40px;
        margin-bottom : 50px;
        // border : 1px solid green ;
        width : 1090px;
    }

    & .swiper-slide {
        border : 1px solid black;
        border-radius : 10px;

        width : 350px !important;
        height : 350px !important;

        box-sizing : border-box;

        padding : 20px;

        img {
            width : 310px;
            height : 310px;

            cursor : pointer;
        }
    }
`

export const BackOverlay = htmlStyled.div`
    background : #ffffff24;

    position : absolute ;

    left : 0px;
    top : 0px;

    width : 100%;
    height : 100%;
`
export const MainDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;

    p {
        text-align : center;
    }
`
export const LoadingDiv = htmlStyled.div`
    display : flex;
    justify-content : center;
    align-items : center;

    height : 300px;
`

export const TimerDiv = htmlStyled.div`
    display : flex;
    justify-content : space-around;
`
export const PadDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    padding : 20px;

    background : #FFFFFF8A;

    min-width : 250px;
`
export const Number = htmlStyled.p`
    color: #28364B;
    font-size : 69px;
    font-family: "Playfair Display", Sans-serif;
`
export const Unit = htmlStyled.p`
    padding-top : 5px;
`