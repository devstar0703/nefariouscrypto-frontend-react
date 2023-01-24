import { ethers } from "ethers";
import Web3 from "web3";

import NEFAMarketplace from './interface/NEFAMarketplace.json' ;

console.log(NEFAMarketplace.networks[5777].address);

export const mintNft = async (web3Provider, _amount, _name, _description, _price, _uri, _royalty, _owner) => {
    try {
        const signer = web3Provider.getSigner() ;
        let marketplace = new ethers.Contract(NEFAMarketplace.networks[5777].address, NEFAMarketplace.abi, signer) ;

        await marketplace.mintNFT(
                _owner,
                Number(_amount),
                ethers.utils.parseUnits(_price, 'ether'),
                ethers.utils.parseUnits(_royalty, 'ether'),
                _name,
                _description,
                _uri
        ) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false;
    }
}

export const fetchOurNfts = async (web3Provider) => {
    try {
        const signer = web3Provider.getSigner() ;
        let marketplace = new ethers.Contract(NEFAMarketplace.networks[5777].address, NEFAMarketplace.abi , signer) ;

        let nfts = await marketplace.fetchAllNFTs() ;

        nfts = await Promise.all(
            nfts.map(async nft => {
                let item = {
                    nft_id : nft.nft_id.toString(),
                    name : nft.name,
                    description : nft.description,
                    uri : nft.uri,
                    price : ethers.utils.formatUnits(nft.nft_price.toString(), 'ether') ,
                    royalty : ethers.utils.formatUnits(nft.royalty.toString(), 'ether'),
                    owners : nft.owners,
                }

                return item ;
            })
        );

        console.log(nfts) ;

        return nfts ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}