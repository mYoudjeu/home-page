import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ContainerComponent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed sx={{ marginTop: '50px', marginBottom: '20px' }}>                    <div style={{ width: '100vw', paddingRight: '500px', alignSelf: 'center' }}>

                <h1 style={{ color: '#0654AE', textAlign: 'right' }}> <strong> You can equally use our services to pay your bills </strong></h1>
                <iframe
                    frameBorder={'0'}
                    height="415"
                    src="https://webpay.smobilpay.acceptance.maviance.info/embed"
                    title="Webpay for partner"
                    style={{ border: 'none', display: 'flex', width: '100vw' }}

                // allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"


                ></iframe>

            </div>
            </Container>
        </React.Fragment >
    );
}