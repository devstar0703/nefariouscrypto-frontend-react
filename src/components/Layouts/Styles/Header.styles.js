import { makeStyles } from "@mui/styles";

import htmlStyled from 'styled-components' ;

export const HeaderDiv = htmlStyled.div`
    padding-right : 5%;
    padding-left : 5%;

    position : absolute;

    left : 0px;
    top : 0px;
    
    display : flex;
    justify-content : space-between;
    align-items : center ;

    padding-top : 30px;

    background-color : #0000002B ;

    width  :100%;
`

export const LogoImg = htmlStyled.img`
    padding-left : 100px;

    width : 30%;
`

export const NavList = htmlStyled.div`

`

export const LinkList = htmlStyled.div`
    display : flex;
    justify-content : flex-end;
    gap : 30px;

    padding-bottom : 30px;

    a {
        text-decoration : none ;
        cursor : pointer;

        color: #E7D58B;
        font-family: "Playfair Display", Sans-serif;
        font-size: 18px;
    }

    svg {
        color : white !important;
    }
`

export const MenuList = htmlStyled.div`
    display : flex ;
    justify-content : flex-end;
    gap: 30px;

    position : relative ;

    a {
        color : white;
        font-family: "Playfair Display", Sans-serif;
        font-size: 18px;
        text-decoration : none ;

        min-width : 100px;
        text-align : center;

        &:after {
            transition: 0.3s;
            content: " ";
            display: block;
            width: 100%;
            bottom: -13px;
            border-bottom: 3px solid transparent;
        }
        &:hover {
            &:after {
                border-bottom: 3px solid gray;
            }
        }
    }
`