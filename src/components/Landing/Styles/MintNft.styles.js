import htmlStyled from 'styled-components' ;

import { makeStyles } from '@mui/styles';

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

export const MintNftDiv = htmlStyled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    gap : 20px;

    padding : 10px;
`

export const AssetPreview = htmlStyled.div`
    cursor : pointer;

    width : 300px;
    height : 300px;

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