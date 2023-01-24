import btoa from 'btoa';

export const ipfs_auth =   "Basic " + btoa(process.env.REACT_APP_IPFS_INFURA_ID + ":" + process.env.REACT_APP_IPFS_INFURA_SECRECT);

export const ipfs_origin = 'https://solsapp.infura-ipfs.io/ipfs/';