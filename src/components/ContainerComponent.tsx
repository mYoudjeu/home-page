import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ContainerComponent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed sx={{ marginTop: '50px', marginBottom: '20px' }}>
                <div style={{ width: '97vw', alignSelf: 'center' }}>

                    <h1 style={{ color: '#0654AE', textAlign: 'center' }}> <strong> You can equally use our services to pay your bills </strong></h1>


                    <iframe width="500" height="350" src="https://webpay.smobilpay.acceptance.maviance.info/embed"
                        title="Embedded THEOplayer"
                        allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                        style={{ border: 'none', display: 'flex', width: '97vw' }}
                    ></iframe>

                </div>
            </Container>
        </React.Fragment >
    );
}