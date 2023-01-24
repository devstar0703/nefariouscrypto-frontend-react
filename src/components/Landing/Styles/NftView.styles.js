import htmlStyled from 'styled-components' ;

import { makeStyles, withStyles } from '@mui/styles';
import { Button, Radio } from '@mui/material';

export const useStyles = makeStyles(() => ({
    paper : {
        fontFamily : 'Bahnschrift SemiBold',
        
        backgroundColor : 'white !important',
        borderRadius : '15px !important',
        boxShadow : "7px 4px 20px 1px rgb(101 117 243 / 68%), 4px -7px 13px 5px rgb(101 117 243 / 68%), 7px 8px 20px 8px rgb(48 175 70 / 67%) !important",

        "& .MuiDialogTitle-root" : {
            color : 'gray'
        },
    }
}));

export const AssetPreview = htmlStyled.div`
    cursor : pointer;

    width : 100%;

    border : 2px solid gray;
    border-radius: 10px;

    font-size : 40px;

    svg {
        font-size : 80px;
    }

    box-sizing : border-box;

    overflow : hidden;

    img {
        width : 100%;
        height : 100%;
    }

    display : flex;
    justify-content : center;
    align-items : center;
`

export const ItemDiv = htmlStyled.div`

`
export const Label = htmlStyled.p`
    font-size : 16px;
`
export const Information = htmlStyled.p`
    padding-left : 20px;
`

export const Row = htmlStyled.div`
    display : flex;
    gap : 20px;
`
export const OfferButton = withStyles({
    root : {
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
})(Button);

export const AcceptButton = withStyles({
    root : {
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
})(Button);

export const MethodRadio = withStyles({
    root : {
        color: '#3772FF !important',
        '&.Mui-checked': {
            color: '#3772FF !important',
        },
    }
})(Radio);