import React from 'react';
import cross from '../../Assets/cancel.svg'
import banner from '../../Assets/fortnite-pictures-b5kfcchwazwiz3cs 1.svg'
import imgOne from '../../Assets/Fortnite_20180630171046 1.svg'
import imgTwo from '../../Assets/Mask group.svg'
import Third from '../../Assets/Third.svg'
import { Typography,Box, IconButton,Grid, Button} from '@mui/material';

const Namste = () => {
    return (
        <>
        <Box>
        <Box display="flex" justifyContent="flex-end" paddingRight="40px">
            <Box width={'27px'} height={'27px'}>
                <IconButton>
                <img src={cross} alt='cross'/>
                </IconButton>
               
            </Box>
        </Box>

        <Typography
            sx={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontSize: '45px',
                fontStyle: 'normal',
                fontWeight: 200,
                lineHeight: '48px',
                letterSpacing: '0.96px',
                textTransform: 'capitalize',
                marginTop: '40px'
            }}
        >
            Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
        </Typography>

        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
                <Box
                    width="100%"
                    maxWidth={{ xs: '100%', md: '1000px' }}
                    height="500px"
                    position="relative"
                    left={{ xs: 'auto', md: '5%' }}
                >
                    <img src={banner} alt='banner-img' style={{ width: '100%', height: '100%' }} />
                </Box>
            </Grid>
            <Grid item  width={'1231px'}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
                </Typography>
            </Grid>
        </Grid>

       <Grid item  marginTop={'50px'}>
       <Button variant='outlined' sx={{width:'461px',height:'60px',bgcolor:'white',left:'35%'}}>
          Visit Website
        </Button>
       </Grid>
        
       <Grid
            container
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            spacing={10} 
        >
            <Grid item>
                <Box width={'300px'} height={'100px'}>
                    <img src={imgOne} alt='imgone' />
                </Box>
            </Grid>
            <Grid item>
                <Box width={'300px'} height={'100px'}>
                    <img src={imgTwo} alt='imgtwo' />
                </Box>
            </Grid>
            <Grid item>
                <Box width={'300px'} height={'100px'}>
                    <img src={Third} alt='third' />
                </Box>
            </Grid>
        </Grid>
    </Box>
    </>
       
    );
}

export default Namste;

