import * as React from 'react' ;

import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import LogoImage from '../../../assets/Landing/logo.png' ;

import {
    HeaderDiv,
    LogoImg,
    NavList,
    LinkList,
    MenuList
} from '../Styles/Header.styles' ;

const Header = () => {
    const menuList = [
        {
            label : "Home",
            link : "/#"
        },
        {
            label : 'About Us',
            link : '/#'
        },
        {
            label : "Our NFTs",
            link : '/#'
        },
        {
            label : "Roadmap",
            link : '/#'
        },
        {
            label : "Our Team",
            link : '/#'
        }
    ];

    const linkList = [
        {
            label : 'Follow Us-',
            link : '/#'
        },
        {
            label : <TwitterIcon />,
            link : 'https://twitter.com/nefariouscrypto?t=zRL_2jbbnkuoYoA1Hv8T1g&s=09'
        },
        {
            label : <InstagramIcon />,
            link : 'https://instagram.com/pirateshipownershipnfts?igshid=YmMyMTA2M2Y='
        }
    ];

    return (
        <HeaderDiv>
            <LogoImg src={LogoImage} />
            <NavList>
                <LinkList>
                    {
                        linkList.map((item, index) => (
                            <a key={index} href={item.link} target='_blank'>
                                {item.label}
                            </a>
                        ))
                    }
                </LinkList>
                <MenuList>
                    {
                        menuList.map((item, index) => (
                            <Link key={index} to={item.link}>
                                {item.label}
                            </Link>
                        ))
                    }
                </MenuList>
            </NavList>
        </HeaderDiv>
    )
}

export default Header ;