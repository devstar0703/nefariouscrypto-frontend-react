import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import htmlStyled from 'styled-components' ;

import Logo from '../../../assets/Landing/logo.png';

export const FooterDiv = htmlStyled.div`
    padding-top : 40px;

    background-color : #28364B ;
    display : flex;
    flex-direction : column;
    align-items : center;

    & .MuiOutlinedInput-root {
        margin-top : 30px;
        // padding : 0px !important;
        background : white !important;
    }

    & .MuiInputBase-input {
        background : white !important;
        border-radius : 5px;
    }
`
export const MessageForm = htmlStyled.div`
    width : 90%;
`

export const SendButton = withStyles({
    root : {
        textTransform : 'capitalize !important',
        backgroundColor : '#818a91 !important',
        paddingTop : '10px !important',
        paddingBottom : '10px !important',
        transition : '0.5s',
        color : 'white !important',
        marginTop : '10px !important',
        marginBottom : '15px !important',

        "&:hover" : {
            backgroundColor : '#c36 !important',
        }
    }
})(Button) ;

export const LogoImage = htmlStyled.div`
    display : flex;
    justify-content : center;

    img {
        width : 200px;
    }
`

export const TitleDiv = htmlStyled.p`
    color: #FFFFFF;
    font-family: "Playfair Display", Sans-serif;
    font-size: 30px;
    padding-bottom : 10px;
`

export const LinkItem = htmlStyled.div`
    cursor : pointer;
    display :flex;
    align-items :center;

    color : white;
    font-family: "Playfair Display", Sans-serif;
    font-weight: 300;

    padding-bottom : 10px;
    
    svg {
        margin-right : 10px;
        color : #E7D58B;
        font-size : 15px;
    }
`

export const CopyRight = htmlStyled.div`
    margin-top : 70px;

    width : 100%;

    background : #E7D58B;

    svg {
        fill : #28364B; 
        height : 50px;
        width : 100%;
    }

    p {
        padding-top : 40px;
        padding-bottom : 30px;
        text-align: center;
        color: #000000;
        font-family: "Raleway", Sans-serif;
        font-size: 18px;
        font-weight: 500;
    }
`

export const Row = htmlStyled.div`
    position : relative;
    z-index : 4;
`

export const BackOverlay = htmlStyled.div`
    left : 0px;
    top : 0px;

    width : 100%;
    height : 100%;

    background-image : url('${Logo}');
    background-repeat : no-repeat no-repeat;
    background-position : center center;
    background-size : 300px 300px;

    opacity : 0.5;

    position : absolute;

    z-index : 5;
`