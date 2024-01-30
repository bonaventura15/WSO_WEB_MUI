import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PopUp } from 'src/sections/overview/PopUp';
import { SideNav } from 'src/layouts/dashboard/side-nav';
import { Box, width } from '@mui/system';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { MarginTwoTone } from '@mui/icons-material';
import NextLink from 'next/link';

const boxStyle = {
  background: `url("/BGWSO.png") lightgray 50% / cover no-repeat`,
};

const faqStyle = {
  background: `url("/bgfaq.png") lightgray 50% / cover no-repeat`,
};

const Page = () => {

  return (
    <>
      <Head>
        <title>WAIFU-SET-ON</title>
      </Head>
      <Box style={boxStyle}>
        <div style={{ marginTop: '25px' }}>
          <SideNav />
        </div>
        <Box
          sx={{
            flex: '1 1 auto',
            alignItems: 'right',
            display: 'flex',
            justifyContent: 'right',
          }}
        >
          <Box
            sx={{
              maxWidth: 750,
              px: 3,
              py: '80px',
              width: '100%',
            }}
          >
            <div>
              <Typography
                sx={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Caveat',
                  fontSize: '96px',
                  fontStyle: 'normal',
                  lineHeight: 'normal'
                }}
              >
                Waifu-Set-On
              </Typography>
            </div>
            <div style={{
              marginTop: '5%'
            }}>
              <Typography
                sx={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Anonymous Pro',
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                }}
              >
                Introducing Waifu-Set-On to everyone. the website that our internship team from PT.XETIA developed
              </Typography>
            </div>
            <div style={{
              marginTop: '5%'
            }}>
              <Typography
                sx={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Anonymous Pro',
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal'
                }}
              >
                Please enjoy our developed features AssistantWaifu and BecomeWaifu.
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
      <Box style={faqStyle}>
        <div style={{ marginTop: '4%', marginLeft: '2%' }}>
          <Typography
            sx={{
              color: '#FFF',
              textAlign: 'left',
              fontFamily: 'Anonymous Pro',
              fontSize: '96px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            FAQ
          </Typography>
        </div>
        <div style={{
          marginRight: '20px',
          background: `url("/wsoicon.png") no-repeat`,
          backgroundSize: 'cover',
          width: '230px',
          height: '250px',
          position: 'absolute',
          top: '187%',
          right: 0,
          zIndex: 1,
        }}>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2%', marginTop: '3%' }}>
          <Typography
            component={NextLink}
            href="/AboutUs"
            style={{
              color: '#FFF',
              fontFamily: 'Anonymous Pro',
              fontSize: '44px',
              fontWeight: 600,
              textDecorationLine: 'underline',
              marginTop: '10px'
            }}>What is WaifuSetOn?
          </Typography>
          <Typography
            component={NextLink}
            href="/AboutUs"
            style={{
              color: '#FFF',
              fontFamily: 'Anonymous Pro',
              fontSize: '44px',
              fontWeight: 600,
              textDecorationLine: 'underline',
              marginTop: '30px'

            }}>What is BecomeWaifu?
          </Typography>
          <Typography
            component={NextLink}
            href="/AboutUs"
            style={{
              color: '#FFF',
              fontFamily: 'Anonymous Pro',
              fontSize: '44px',
              fontWeight: 600,
              textDecorationLine: 'underline',
              marginTop: '30px'
            }}>What is AssistantWaifu?
          </Typography>
          <Typography
            component={NextLink}
            href="/AboutUs"
            style={{
              color: '#FFF',
              fontFamily: 'Anonymous Pro',
              fontSize: '44px',
              fontWeight: 600,
              textDecorationLine: 'underline',
              marginTop: '30px'

            }}>How do I access the feature?
          </Typography>
        </div>
        <div
          style={{
            background: 'linear-gradient(179deg, rgba(91, 85, 87, 0.25) 6.11%, rgba(217, 217, 217, 0.00) 94.51%)',
            marginTop: '10%',
            display: 'flex',
            marginBottom: '3%'
          }}>
          <div style={{ marginTop: '70px' }}>
            <Typography
              component={NextLink}
              href="/about-us"
              style={{
                margin: '0 30px',
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '30px',
                fontWeight: 600,
                textDecorationLine: 'none'

              }}>ABOUT US</Typography>
          </div>
          <div style={{
            display: 'table-column', margin: '0 90px',
          }}>
            <div>
              <Typography style={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 600,
                marginTop: '25px'

              }}>Email:</Typography>
              <Typography
                component={NextLink}
                href="mailto:dimas.ngadinegaran@gmail.com"
                style={{
                  color: '#FFF',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecorationLine: 'none',
                }}
              >
                dimas.ngadinegaran@gmail.com
              </Typography>
            </div>

            <div>
              <Typography style={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 600,
                marginTop: '6px'
              }}>Instagram:</Typography>
              <Typography
                component={NextLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/godimfrannanta"
                style={{
                  color: '#FFF',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecorationLine: 'none',
                }}>godimfrannanta</Typography>
            </div>
          </div>
          <div style={{
            display: 'table-column', margin: '0 50px',
          }}>
            <Typography style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 600,
              marginTop: '18px',
              marginTop: '25px'

            }}>Email:</Typography>
            <Typography
              component={NextLink}
              href="mailto:bonaventurayuan202@gmail.com"
              style={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: 600,
                textDecorationLine: 'none',
              }}>bonaventurayuan202@gmail.com</Typography>
            <Typography style={{
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 600,
              marginTop: '10px'
            }}>Instagram:</Typography>
            <Typography
              component={NextLink}
              href="https://www.instagram.com/yuanaryas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: 600,
                textDecorationLine: 'none',
              }}
            >
              yuanaryas
            </Typography>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 50px',
          }}>
            <Typography style={{
              order: 1,
              color: '#FFF',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 600,
              marginTop: '25px'
            }}>Fitur:</Typography>
            <Typography
              component={NextLink}
              href="/become-waifu"
              style={{
                order: 2,
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: 600,
                textDecorationLine: 'none'
              }}>BecomeWaifu (BW)</Typography>
            <Typography
              component={NextLink}
              href="/asisten-waifu"
              style={{
                order: 3,
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: 600,
                textDecorationLine: 'none',
                marginTop: '10px'
              }}>AsistenWaifu (AIU)</Typography>
          </div>
        </div>
      </Box>
    </>
  );
};


export default Page;