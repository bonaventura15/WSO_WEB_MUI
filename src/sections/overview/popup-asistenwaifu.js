import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import {
    Button,
    Card,
    Modal
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShieldIcon from '@mui/icons-material/Shield';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';
import Cookies from 'js-cookie';
import NextLink from 'next/link';


export const PopUpAsistenWaifu = ({ open, onClose }) => {

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Card sx={{ width: 500, height: 380, backgroundColor: '#272739', borderRadius: '30px' }}>
                    <CardContent>
                        <Typography style={{
                            color: '#FFF',
                            fontFamily: 'Anonymous Pro',
                            fontSize: '30px',
                            fontWeight: '400px',
                            textAlign: 'center'
                        }}>
                            Select model AI-U
                        </Typography>
                        <Typography style={{
                            color: '#FFF',
                            fontFamily: 'Roboto',
                            fontSize: '24px',
                            fontWeight: '100px',
                            textAlign: 'center',
                            marginLeft: '20px',
                            marginRight: '20px'
                        }}>
                            Choose the artificial intelligence model that you would like to select as your companion
                        </Typography>
                        <div style={{ display: 'flex', marginTop: '8px' }}>
                            <div style={{ marginRight: '20px', marginLeft: '85px' }}>
                                <NextLink href="/asisten-waifu-beta" passHref>
                                    <Button
                                        component="a"
                                        style={{ background: `url("/beta.png")`, backgroundRepeat: 'no-repeat', width: '150px', height: '150px' }}
                                        onClick={handleClose}
                                    ></Button>
                                </NextLink>
                                <Typography style={{
                                    fontFamily: 'Roboto',
                                    fontSize: '24px',
                                    fontWeight: '100px',
                                    color: '#fff',
                                    marginLeft: '10px'
                                }}>
                                    B.E.T.A
                                </Typography>
                            </div>
                            <div>
                                <NextLink href="/asisten-waifu" passHref>
                                    <Button
                                        component="a"
                                        style={{ background: `url("/gpt.png")`, backgroundRepeat: 'no-repeat', width: '150px', height: '150px' }}
                                        onClick={handleClose}
                                    ></Button>
                                </NextLink>
                                <Typography style={{
                                    fontFamily: 'Roboto',
                                    fontSize: '24px',
                                    fontWeight: '100px',
                                    textAlign: 'center',
                                    color: '#fff'
                                }}>
                                    G.P.T
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </Modal>

    );
};

