import { TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NextLink from 'next/link';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const Page = () => {

    const boxStyle = {
        background: '#202039',
    };

    return (

        <>
            <Head>
                <title>
                    About Us | WSO
                </title>
            </Head>
            <Box style={boxStyle}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%', marginLeft: '350px' }}>
                        <Typography style={{ textAlign: 'center', fontSize: '60px', color: 'white', fontWeight: '700', fontFamily: 'Anonymous Pro' }}> THANK YOU FOR YOUR HARDWORK</Typography>
                    </div>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '300px' }}>
                        <ButtonGroup variant="text" aria-label="text button group" style={{ backgroundColor: 'rgba(49, 53, 81, 0.50)' }}>
                            <Button
                                component={NextLink}
                                href="/"
                                style={{ fontSize: '36px', color: '#fff', fontFamily: 'Segoe UI' }}>Home</Button>
                            <Button
                                component={NextLink}
                                href="/user-information"
                                style={{ fontSize: '36px', color: '#fff', fontFamily: 'Segoe UI' }}>User</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div style={{
                    display: 'flex', marginTop: '20px', marginLeft: '250px', marginRight: '250px', justifyContent: 'space-between', marginBottom: '60px'
                }}>
                    <Card sx={{ maxWidth: 405, background: 'none' }}>
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '25px',
                            textAlign: 'center',
                            color: '#FFF',
                            marginBottom: '8px'
                        }}> Dimas surya Frannanta</Typography>
                        <CardMedia
                            sx={{ height: 300, }}
                            image="/dimas.png "
                            title="green iguana"
                        />
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '22px',
                            textAlign: 'center',
                            color: '#FFF',
                            fontWeight: 400,
                            marginTop: '8px'
                        }}> Developer - Backend & UI/UX</Typography>
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '15px',
                            color: '#FFF',
                            fontWeight: 300,
                            marginTop: '8px'
                        }}> “Hi, my name is Dimas, RestAPI developer and designer of this website, as well as the originator and planner of the WSO project </Typography>
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '19px',
                            textAlign: 'center',
                            color: '#FFF',
                            fontWeight: 400,
                            marginTop: '28px'
                        }}>dimas.ngadinegaran@gmail.com</Typography>
                    </Card>
                    <Card sx={{ maxWidth: 405, background: 'none' }}>
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '25px',
                            textAlign: 'center',
                            color: '#FFF',
                            marginBottom: '8px'
                        }}> Bonaventura Yuan Arya S</Typography>
                        <CardMedia
                            sx={{ height: 300, }}
                            image="/yuan.png "
                            title="green iguana"
                        />
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '22px',
                            textAlign: 'center',
                            color: '#FFF',
                            fontWeight: 400,
                            marginTop: '8px'
                        }}> FrontEnd</Typography>
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '15px',
                            color: '#FFF',
                            fontWeight: 300,
                            marginTop: '8px'
                        }}> “Hi, my name is Yuan, FrontEnd of this website, as well as the originator and planner of the WSO project </Typography>
                        <Typography style={{
                            fontFamily: 'IBM Plex Mono',
                            fontSize: '19px',
                            textAlign: 'center',
                            color: '#FFF',
                            fontWeight: 400,
                            marginTop: '28px'
                        }}>bonaventurayuan202@gmail.com</Typography>
                    </Card>
                </div>
                <div style={{ textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginTop: '25px' }}>
                        <Typography style={{ textAlign: 'center', color: '#fff', fontSize: '30px' }}>SUPPORT</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <Avatar
                                alt="andra"
                                src="/andra.jpg"
                                sx={{ width: 100, height: 100, marginRight: '20px' }}
                            />
                            <div style={{ color: '#fff' }}>
                                <Typography variant="h6" style={{ marginBottom: '5px' }}>
                                    Evandra Arya Mahendra
                                </Typography>
                                <Typography variant="body2">
                                    Design web BW V.01<br />
                                    Design gacha banner V.01
                                </Typography>
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem style={{ margin: '0 20px' }} />
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <Avatar
                                alt="andra"
                                src="/lil.jpg"
                                sx={{ width: 100, height: 100, marginRight: '20px' }}
                            />
                            <div style={{ color: '#fff' }}>
                                <Typography variant="h6" style={{ marginBottom: '5px' }}>
                                    Muhammad Khalil 
                                </Typography>
                                <Typography variant="body2">
                                Mentor and consultation<br />
                                     place design Modern WSO
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default Page;
