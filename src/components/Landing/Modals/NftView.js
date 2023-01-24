import * as React from 'react';

import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';

import {
    ItemDiv,
    Label,
    Information,
    useStyles,
    AssetPreview,
    Row,
    MethodRadio,
    OfferButton
} from '../Styles/NftView.styles';

import NFT183 from 'src/assets/Landing/Nefarious-Crypto-Pirate-Ship-.888.-Creation-183-1-768x768.jpg';

const NftView = (props) => {
    const {
        open, handleClose,
        nft_data
    } = props ;

    const classes = useStyles() ;

    const [purchase_method, setPurchaseMethod] = React.useState('offer') ;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            sx={{backdropFilter : 'blur(4px)'}}
            classes={{
                paper : classes.paper
            }}
        >
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <AssetPreview >
                            <img src={NFT183} />
                        </AssetPreview>
                        <Row>

                        </Row>
                    </Grid>
                    <Grid item xs={6}>
                        <ItemDiv>
                            <Label>
                                NFT ID
                            </Label>
                            <Information>
                                # { nft_data.nft_id }
                            </Information>
                        </ItemDiv>
                        <ItemDiv>
                            <Label>
                                Name
                            </Label>
                            <Information>
                                { nft_data.name }
                            </Information>
                        </ItemDiv>
                        <ItemDiv>    
                            <Label>
                                Description
                            </Label>
                            <Information>
                                { nft_data.description }
                            </Information>
                        </ItemDiv>
                        <ItemDiv>
                            <Label>
                                Price
                            </Label>
                            <Information>
                                { nft_data.price } ETH
                            </Information>
                        </ItemDiv>
                        <ItemDiv>    
                            <Label>
                                Amount
                            </Label>
                            <Information>
                                { nft_data.amount } 
                            </Information>
                        </ItemDiv>
                        <ItemDiv>    
                            <Label>
                                Royalty
                            </Label>
                            <Information>
                                { nft_data.royalty }
                            </Information>
                        </ItemDiv>
                    </Grid>
                </Grid>

                <FormControl sx={{mt : '20px' , mb : '20px'}}>
                    <RadioGroup
                        value={purchase_method}
                        onChange={(e) => setPurchaseMethod(e.target.value)}
                    >
                        <FormControlLabel value="offer" control={<MethodRadio/>} label="Offer" />
                        <FormControlLabel value="now" control={<MethodRadio/>} label="Buy Now" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <Divider />
            <DialogActions>
                <OfferButton>Phursase</OfferButton>
            </DialogActions>
        </Dialog>
    )
}

export default NftView;