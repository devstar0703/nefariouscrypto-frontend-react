import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import htmlStyled from 'styled-components';

import MintNowBackground from 'src/assets/Landing/mint_now.jpg' ;
import Rope from 'src/assets/Landing/rope.png' ;
import ServiceBg from 'src/assets/Landing/services-bg-2.png' ;
import WaveImg from 'src/assets/Landing/wave.svg' ;

export const TopDiv = htmlStyled.div`
    position : relative ;
`

export const MainDiv = htmlStyled.div`
    position : relative;
`

export const StrongBackOverlay = htmlStyled.div`
    position : absolute;
    background : #00000026 ;

    left : 0px;
    top : 0px;

    width : 100%;
    height : 100%;
`

export const MintNowDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    background-image : url('${MintNowBackground}') ;

    width : 100%;

    background-position : center center;

    padding-top : 450px;
    padding-bottom : 250px;

    p {
        text-align : center;
    }
`

export const TitleParagraph = htmlStyled.p`
    color: #E8B923;
    font-family: "Carter One", Sans-serif;
    font-size: 81px;
    text-transform: uppercase;
    line-height: 88px;
    text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);

    max-width : 1200px;

    padding-bottom : 40px;
`

export const Row = htmlStyled.div`
    display :flex;
    justify-content : center ;
`

export const MintButton = withStyles({
    root  : {
        fontFamily: "'Playfair Display', Sans-serif",
        borderRadius : '0px !important',
        background : '#E7D58B !important',
        fontSize : '16px !important',
        textTransform : "capitalize !important",
        padding : '5px 20px !important',
        transition : '1s',

        marginRight : '10px !important',

        "&:hover" : {
            background : 'black !important',
            color : 'white !important'
        }
    }
})(Button) ;

export const RopeLine = htmlStyled.div`
    background-image : url('${Rope}');
    background-repeat: repeat no-repeat;
    height : 20px;
    width : 100%;
`

export const  WhatWeDoDiv = htmlStyled.div`
    background-image: url('${ServiceBg}');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;

    height : 300px;

    color: #C5B36D;
    font-family: "Pinyon Script", Sans-serif;
    font-size: 30px;
    font-weight: 200;

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`

export const BackOverlay = htmlStyled.div`
    width : 100%;
    background : #28364B;
`

export const WaveDiv = htmlStyled.div`
    display : flex;
    justify-content : center;
`

export const WaveLine = htmlStyled.div`
    mask-image : url('${WaveImg}');

    background : #E7D58B;

    height : 20px;
    width : 25px;
`