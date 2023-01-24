import htmlStyled from 'styled-components';

import Sea from 'src/assets/Landing/video-section-bg.jpg' ;
import Boat from 'src/assets/Landing/boat-wheel.jpg';

export const SeaDiv = htmlStyled.div`
    padding-top : 100px;
    padding-bottom : 100px;

    border-top : 2px solid gray;

    background-image : url('${Sea}') ;
    background-repeat : no-repeat no-repeat;
    background-size : cover;
    
    display : flex;
    justify-content : space-around;
    width : 100%;

    p {
        color : white;
    }
`

export const LetterDiv = htmlStyled.div`
    width : 40%;
`

export const SmallTitle = htmlStyled.p`
    color: #E7D58B !important;
    font-family: "Playball", Sans-serif;
    font-size: 22px;
    font-weight: 200;
`

export const Title = htmlStyled.p`
    color: #E8B923 !important;
    font-family: "Playfair Display", Sans-serif;
    font-size: 48px;
`

export const ImageDiv = htmlStyled.div`
    width : 40%;
    background-image : url('${Boat}');
    background-position : center center;
`
