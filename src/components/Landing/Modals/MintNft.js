import * as React from 'react' ;

import { connect } from 'react-redux';
import { MintNefaNFT, UploadNftToIpfs } from 'src/redux/actions/nft';

import { useWalletInfo } from 'src/contexts/WalletContext';

import { Dialog, DialogContent, DialogTitle, Divider, InputLabel, Slider, TextField } from '@mui/material';

import {  toast } from 'react-toastify/dist/react-toastify';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {
    MintNftDiv,
    AssetPreview,
    useStyles
} from '../Styles/MintNft.styles';

import { MintButton } from '../Styles/MintNow.styles';

const MintNft = (props) => {
    const {
        open, handleClose,
    } = props ;

    const {
        web3Provider, 
        walletAddress
    } = useWalletInfo() ;

    const classes = useStyles() ;

    const [uploadedFile, setUploadedFile] = React.useState({raw : "", preview : ""}) ;
    const [nft_name, setNftName] = React.useState('');
    const [nft_desc, setNftDesc] = React.useState('') ;
    const [nft_amount, setNftAmount] = React.useState(0) ;
    const [nft_price, setNftPrice] = React.useState(0) ;
    const [royalty, setRoyalty] = React.useState(0) ;

    const handleUploadAsset = (e) => {
        if(e.target.files.length) {
            setUploadedFile({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            })
        }    
    }

    const handleMintNft = async () => {
        let id = toast.loading("Uploading Asset To IPFS...") ;

        let ipfs_hash = await UploadNftToIpfs(uploadedFile.raw);

        toast.update(id, { render: "Uploading is successful", type: "success", autoClose: 1000, isLoading: false });

        id = toast.loading("Mint NFT Tx is pending...") ;

        await MintNefaNFT(web3Provider, nft_amount, nft_name, nft_desc, nft_price, ipfs_hash, royalty, walletAddress) ;

        toast.update(id, { render: "Mint NFT Tx is successful", type: "success", autoClose: 5000, isLoading: false });
    }

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            classes={{
                paper: classes.paper
            }}
            sx={{backdropFilter: 'blur(4px)'}}
        >
            <DialogTitle>
                Mint Your Own NFT.
            </DialogTitle>
            <Divider />
            <DialogContent>
                <MintNftDiv>
                    <InputLabel htmlFor='upload-asset'>
                        <AssetPreview>
                            { uploadedFile.preview ?
                            <img src={uploadedFile.preview} /> 
                            : <CloudUploadIcon /> }
                        </AssetPreview>
                    </InputLabel>
                    <input 
                        multiple
                        type="file"
                        id="upload-asset"
                        style={{ display: "none" }}
                        onChange={handleUploadAsset}
                    />

                    <TextField 
                        value={nft_price}
                        onChange={(e) => setNftPrice(e.target.value)}
                        fullWidth
                        type='number'
                        size={'small'}
                        placeholder='Enter your nft price.'
                        label='Price'
                    />

                    <TextField 
                        value={nft_amount}
                        onChange={(e) => setNftAmount(e.target.value)}
                        fullWidth
                        type='number'
                        size={'small'}
                        placeholder='Enter your nft name.'
                        label='Amount'
                    />

                    <TextField 
                        value={nft_name}
                        onChange={(e) => setNftName(e.target.value)}
                        fullWidth
                        size={'small'}
                        placeholder='Enter your nft name.'
                        label='NFT name'
                    />

                    <TextField
                        value={nft_desc}
                        onChange={(e) => setNftDesc(e.target.value)}
                        fullWidth
                        size='small'
                        placeholder='Enter your nft description.'
                        label="NFT description"
                    />

                    <Slider
                        value={royalty}
                        aria-label="Royalty"
                        valueLabelDisplay="auto"
                        color={'primary'}
                        onChange={(e) => setRoyalty(e.target.value)}
                        min={1}
                        max={30}
                    />

                    <MintButton fullWidth onClick={() => handleMintNft()}>Mint Now</MintButton>
                </MintNftDiv>
            </DialogContent>
        </Dialog>
    )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(MintNft) ;